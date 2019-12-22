export interface RecipeStep {
  icon: any;
  itemType: string;
  itemName: string;
  units: string;
  quantity: number;
}

export interface IState {
  recipeSteps: RecipeStep[];
  staffTime: number;
  processTime: number;
  totalGrams: number;
  totalTime: number;
}

export type Actions =
  | { type: "ADD_NEW_INGREDIENT"; payload: any }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_RECIPE_DETAILS"; payload: { id: number; event: string } }
  | {
      type: "UPDATE_INGREDIENT_OR_TIME";
      payload: { id: number; event: number; itemType: string };
    }
  | { type: "UPDATE_TOTAL"; payload: any };
