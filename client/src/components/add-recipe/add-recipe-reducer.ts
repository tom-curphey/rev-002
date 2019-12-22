import { IState, Actions } from "./add-recipe-card.types";

import { updateItemQuantity } from "./add-recipe.utils";

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

    case "UPDATE_INGREDIENT_OR_TIME":
      switch (action.payload.itemType) {
        case "INGREDIENT":
          return {
            ...state,
            recipeDetails: updateItemQuantity(
              state.recipeDetails,
              action.payload.id,
              action.payload.event
            )
          };

        case "STAFF_TIME":
          return {
            ...state,
            recipeDetails: updateItemQuantity(
              state.recipeDetails,
              action.payload.id,
              action.payload.event
            )
          };
        case "PROCESS_TIME":
          return {
            ...state,
            recipeDetails: updateItemQuantity(
              state.recipeDetails,
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
