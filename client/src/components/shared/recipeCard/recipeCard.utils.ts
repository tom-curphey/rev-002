import { RecipeStep } from "./recipeCard.types";

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
