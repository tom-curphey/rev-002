import { RecipeStep, IRecipeDetails, Actions } from "./recipeCard.types";

export const updateItemQuantity = (
  recipeDetails: RecipeStep[],
  id: number,
  event: any
) =>
  recipeDetails.map(item =>
    recipeDetails.indexOf(item) === id
      ? { ...item, quantity: event ? event : 0 }
      : item
  );

export const updateRecipeDetailsValue = (
  recipeDetails: IRecipeDetails,
  updateTarget: string,
  action: Actions
) => ({
  ...recipeDetails,
  [updateTarget]: action.payload ? action.payload : 0
});
