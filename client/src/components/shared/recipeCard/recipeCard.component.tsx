import React, { useReducer, useEffect } from "react";
import {
  RecipeCardContainer,
  TotalContainer,
  TotalUnit
} from "./recipeCard.styles";

import recipeCardReducer from "./recipeCardReducer";

import RecipeDetails from "./recipeDetails/recipeDetails.component";
import RecipeDetailsTable from "./ingredientsAndStepsTable/ingredientsAndStepsTable.component";
import ButtonRound from "../buttonRound/buttonRound.component";

const newRecipe = {
  recipeDetails: {
    recipeName: "",
    recipeServes: 0,
    salesPricePerServe: 0,
    weeklySalesPerServe: 0
  },
  recipeSteps: [
    {
      itemType: "INGREDIENT",
      itemName: "",
      units: "grams",
      quantity: 0
    }
  ],
  staffTime: 0,
  processTime: 0,
  totalGrams: 0,
  totalTime: 0
};

const RecipeCard: React.FC<{
  recipe?: any;
  saveRecipe: (recipe: any) => void;
}> = ({ recipe = newRecipe, saveRecipe }) => {
  const [state, dispatch] = useReducer(recipeCardReducer, recipe);

  const {
    recipeDetails,
    recipeSteps,
    staffTime,
    processTime,
    totalGrams,
    totalTime
  } = state;

  useEffect(() => {
    let totalTime = 0;
    let totalGrams = 0;
    let staffTime = 0;
    let processTime = 0;

    recipeSteps.forEach(item => {
      switch (item.itemType) {
        case "INGREDIENT":
          totalGrams += item.quantity;
          break;

        case "STAFF_TIME":
          staffTime += item.quantity;
          totalTime += item.quantity;
          break;

        case "PROCESS_TIME":
          processTime += item.quantity;
          totalTime += item.quantity;
          break;

        default:
          break;
      }

      dispatch({
        type: "UPDATE_TOTAL",
        payload: {
          totalTime,
          totalGrams,
          staffTime,
          processTime
        }
      });
    });
  }, [recipeSteps]);

  return (
    <RecipeCardContainer>
      <RecipeDetails recipeDetails={recipeDetails} dispatch={dispatch} />
      <RecipeDetailsTable dispatch={dispatch} recipeDetails={recipeSteps} />
      <TotalContainer>
        <TotalUnit>
          Staff Time:<span>{staffTime}</span>
        </TotalUnit>
        <TotalUnit>
          Process Time:<span>{processTime}</span>
        </TotalUnit>
        <TotalUnit>
          Total Grams:<span>{totalGrams} </span>
        </TotalUnit>
        <TotalUnit>
          Total Time:<span>{totalTime} </span>
        </TotalUnit>
      </TotalContainer>
      <ButtonRound color="secondary" onClick={() => saveRecipe(state)}>
        Confirm Recipe
      </ButtonRound>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
