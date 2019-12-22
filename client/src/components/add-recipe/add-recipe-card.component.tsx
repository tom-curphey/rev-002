import React, { useReducer, useEffect } from "react";
import {
  RecipeCardContainer,
  TotalContainer,
  TotalUnit
} from "./add-recipe-card.styles";

import recipeCardReducer from "./add-recipe-reducer";

import RecipeGeneral from "./recipe-general-details/recipe-general.component";
import RecipeDetailsTable from "./recipe-details/recipe-details.component";
import IconApple from "../../assets/icon-apple.svg";

const INITIAL_STATE = {
  recipeDetails: [
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

  const {
    recipeDetails,
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

    recipeDetails.forEach(item => {
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
  }, [recipeDetails]);

  return (
    <RecipeCardContainer>
      <RecipeGeneral />
      <RecipeDetailsTable dispatch={dispatch} recipeDetails={recipeDetails} />
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
