export interface IRecipeDetails {
  icon: any;
  recipeDetails: string;
  units: string;
  quantity: number;
}

export interface IState {
  recipeDetails: IRecipeDetails[];
  totalQuantity: number;
  totalTime: number;
}

export interface IActions {
  type: string;
  payload: any;
}
