import React, { useReducer } from "react";

import { IState, IActions } from "./add-recipe-card.types";

import { RecipeCardContainer } from "./add-recipe-card.styles";

import RecipeGeneral from "./recipe-general-details/recipe-general.component";
import RecipeDetailsTable from "./recipe-details/recipe-details.component";

import IconApple from "../../assets/icon-apple.svg";

const INITIAL_STATE = {
  recipeDetails: [
    {
      icon: IconApple,
      recipeDetails: "",
      units: "grams",
      quantity: 0
    }
  ],
  totalQuantity: 0,
  totalTime: 0
};

const recipeCardReducer = (state: IState, action: IActions) => {
  switch (action.type) {
    case "ADD_NEW_INGREDIENT":
      return {
        ...state,
        recipeDetails: state.recipeDetails.concat(action.payload)
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        recipeDetails: state.recipeDetails.filter(
          item => state.recipeDetails.indexOf(item) !== action.payload
        )
      };
    default:
      return state;
  }
};

const RecipeCard: React.FC = () => {
  const [state, dispatch] = useReducer(recipeCardReducer, INITIAL_STATE);

  const { recipeDetails } = state;

  return (
    <RecipeCardContainer>
      <RecipeGeneral />
      <RecipeDetailsTable dispatch={dispatch} recipeDetails={recipeDetails} />
      <div></div>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
