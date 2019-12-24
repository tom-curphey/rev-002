import { IState, Actions } from "./recipeCard.types";

import {
  updateItemQuantity,
  updateRecipeDetailsValue
} from "./recipeCard.utils";

const recipeCardReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "UPDATE_RECIPE_NAME":
      return {
        ...state,
        recipeDetails: {
          ...state.recipeDetails,
          recipeName: action.payload
        }
      };

    case "UPDATE_RECIPE_SERVES":
      return {
        ...state,
        recipeDetails: updateRecipeDetailsValue(
          state.recipeDetails,
          "recipeServes",
          action
        )
      };

    case "UPDATE_SALES_PRICE_PER_SERVICE":
      return {
        ...state,
        recipeDetails: updateRecipeDetailsValue(
          state.recipeDetails,
          "salesPricePerServe",
          action
        )
      };

    case "UPDATE_EXPECTED_WEEKLY_SALES_PER_SERVE":
      return {
        ...state,
        recipeDetails: updateRecipeDetailsValue(
          state.recipeDetails,
          "weeklySalesPerServe",
          action
        )
      };

    case "ADD_NEW_INGREDIENT":
      return {
        ...state,
        recipeSteps: state.recipeSteps.concat(action.payload)
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        recipeSteps: state.recipeSteps.filter(
          item => state.recipeSteps.indexOf(item) !== action.payload
        )
      };

    case "UPDATE_RECIPE_DETAILS":
      return {
        ...state,
        recipeSteps: state.recipeSteps.map(item =>
          state.recipeSteps.indexOf(item) === action.payload.id
            ? { ...item, itemName: action.payload.event }
            : item
        )
      };

    case "UPDATE_INGREDIENT_OR_TIME":
      switch (action.payload.itemType) {
        case "INGREDIENT":
          return {
            ...state,
            recipeSteps: updateItemQuantity(
              state.recipeSteps,
              action.payload.id,
              action.payload.event
            )
          };

        case "STAFF_TIME":
          return {
            ...state,
            recipeSteps: updateItemQuantity(
              state.recipeSteps,
              action.payload.id,
              action.payload.event
            )
          };
        case "PROCESS_TIME":
          return {
            ...state,
            recipeSteps: updateItemQuantity(
              state.recipeSteps,
              action.payload.id,
              action.payload.event
            )
          };

        default:
          return state;
      }

    case "UPDATE_TOTAL":
      return {
        ...state,
        totalGrams: action.payload.totalGrams,
        totalTime: action.payload.totalTime,
        processTime: action.payload.processTime,
        staffTime: action.payload.staffTime
      };

    default:
      return state;
  }
};

export default recipeCardReducer;
