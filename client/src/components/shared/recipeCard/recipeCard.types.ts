export interface RecipeStep {
  icon: any;
  itemType: string;
  itemName: string;
  units: string;
  quantity: number;
}

export interface IRecipeDetails {
  recipeName: string;
  recipeServes: number;
  salesPricePerServe: number;
  weeklySalesPerServe: number;
}

export interface IState {
  recipeDetails: IRecipeDetails;
  recipeSteps: RecipeStep[];
  staffTime: number;
  processTime: number;
  totalGrams: number;
  totalTime: number;
}

export type Actions =
  | { type: "UPDATE_RECIPE_NAME"; payload: string }
  | { type: "UPDATE_RECIPE_SERVES"; payload: number }
  | { type: "UPDATE_SALES_PRICE_PER_SERVICE"; payload: number }
  | { type: "UPDATE_EXPECTED_WEEKLY_SALES_PER_SERVE"; payload: number }
  | { type: "ADD_NEW_INGREDIENT"; payload: RecipeStep }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_RECIPE_DETAILS"; payload: { id: number; event: string } }
  | {
      type: "UPDATE_INGREDIENT_OR_TIME";
      payload: { id: number; event: number; itemType: string };
    }
  | { type: "UPDATE_TOTAL"; payload: any };
