import React, { useReducer, useEffect } from "react";

import { IState, Actions } from "./add-recipe-card.types";

import {
  RecipeCardContainer,
  TotalContainer,
  TotalUnit
} from "./add-recipe-card.styles";

import RecipeGeneral from "./recipe-general-details/recipe-general.component";
import RecipeDetailsTable from "./recipe-details/recipe-details.component";

import IconApple from "../../assets/icon-apple.svg";
import IconChefHat from "../../assets/icon-chef-hat.svg";
import IconTimer from "../../assets/icon-timer.svg";

const INITIAL_STATE = {
  recipeDetails: [
    {
      icon: IconApple,
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

const recipeCardReducer = (state: IState, action: Actions) => {
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

    case "UPDATE_RECIPE_DETAILS":
      return {
        ...state,
        recipeDetails: state.recipeDetails.map(item =>
          state.recipeDetails.indexOf(item) === action.payload.id
            ? { ...item, itemName: action.payload.event }
            : item
        )
      };

    case "UPDATE_QUANTITY":
      switch (action.payload.icon) {
        case IconApple:
          return {
            ...state,
            recipeDetails: state.recipeDetails.map(item =>
              state.recipeDetails.indexOf(item) === action.payload.id
                ? { ...item, quantity: action.payload.event }
                : item
            )
          };

        case IconChefHat:
          return {
            ...state,
            recipeDetails: state.recipeDetails.map(item =>
              state.recipeDetails.indexOf(item) === action.payload.id
                ? { ...item, quantity: action.payload.event }
                : item
            ),
            staffTime: state.staffTime += action.payload.event
          };

        case IconTimer:
          return {
            ...state,
            recipeDetails: state.recipeDetails.map(item =>
              state.recipeDetails.indexOf(item) === action.payload.id
                ? { ...item, quantity: action.payload.event }
                : item
            ),
            processTime: state.processTime += action.payload.event
          };
      }
    case "UPDATE_TOTAL":
      return {
        ...state,
        totalQuantity: action.payload.totalQuantity,
        totalTime: action.payload.totalTime
      };

    default:
      return state;
  }
};

const RecipeCard: React.FC = () => {
  const [state, dispatch] = useReducer(recipeCardReducer, INITIAL_STATE);

  const { recipeDetails } = state;

  useEffect(() => {
    let totalTime = 0;
    let totalQuantity = 0;

    recipeDetails.forEach(item =>
      item.icon === IconApple
        ? (totalQuantity += item.quantity)
        : (totalTime += item.quantity)
    );

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        totalTime: totalTime,
        totalQuantity: totalQuantity
      }
    });
  }, [state.recipeDetails]);

  return (
    <RecipeCardContainer>
      <RecipeGeneral />
      <RecipeDetailsTable dispatch={dispatch} recipeDetails={recipeDetails} />
      <TotalContainer>
        <TotalUnit>
          Total Grams:<span> {state.totalGrams} </span>
        </TotalUnit>
        <TotalUnit>
          Total Time: <span> {state.totalTime} </span>
        </TotalUnit>
      </TotalContainer>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
