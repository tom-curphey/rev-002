import { IRecipeDetail } from "./add-recipe-card.types";

export const updateItemQuantity = (
  recipeDetails: IRecipeDetail[],
  id: number,
  event: any
) =>
  recipeDetails.map(item =>
    recipeDetails.indexOf(item) === id
      ? { ...item, quantity: event ? event : 0 }
      : item
  );
