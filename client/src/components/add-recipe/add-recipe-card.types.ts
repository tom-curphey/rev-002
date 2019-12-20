export interface IRecipeDetails {
  icon: any;
  itemName: string;
  units: string;
  quantity: number;
}

export interface IState {
  recipeDetails: IRecipeDetails[];
  totalQuantity: number;
  totalTime: number;
}

export type Actions =
  | { type: "ADD_NEW_INGREDIENT"; payload: any }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "UPDATE_RECIPE_DETAILS"; payload: { id: number; event: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: number; event: number };
    }
  | { type: "UPDATE_TOTAL"; payload: any };
