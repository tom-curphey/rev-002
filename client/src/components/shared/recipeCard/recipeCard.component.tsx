import React, { useReducer, useEffect } from "react";
import {
  RecipeCardContainer,
  TotalContainer,
  TotalUnit
} from "./recipeCard.styles";

import recipeCardReducer from "./recipeCard";

import RecipeGeneral from "./recipeDetails/recipeDetails.component";
import RecipeDetailsTable from "./ingredientsAndStepsTable/ingredientsAndStepsTable.component";
import IconApple from "../../../assets/icon-apple.svg";

const INITIAL_STATE = {
  recipeSteps: [
    {
      icon: IconApple,
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

const RecipeCard: React.FC = () => {
  const [state, dispatch] = useReducer(recipeCardReducer, INITIAL_STATE);

  const { recipeSteps, staffTime, processTime, totalGrams, totalTime } = state;

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
      <RecipeGeneral />
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
    </RecipeCardContainer>
  );
};

export default RecipeCard;