import * as React from "react";
import { IRecipeDetail, Actions } from "../add-recipe-card.types";

import {
  RecipeTable,
  RecipeTableHeader,
  TableUpdateButtonsContainer,
  UpdateTableButton
} from "./recipe-details.styles";

import RecipeDetailsRow from "../recipe-details-row/recipe-details-row.component";

import IconChefHat from "../../../assets/icon-chef-hat.svg";
import IconTimer from "../../../assets/icon-timer.svg";
import IconApple from "../../../assets/icon-apple.svg";

interface IRecipeTableProps {
  recipeDetails: IRecipeDetail[];
  dispatch: React.Dispatch<Actions>;
}

const RecipeDetailsTable: React.FC<IRecipeTableProps> = ({
  recipeDetails,
  dispatch
}) => {
  return (
    <div>
      <RecipeTable>
        <thead>
          <RecipeTableHeader>
            <th scope="column">Recipe Details</th>
            <th scope="column">Quantity</th>
            <th scope="column">Units</th>
            <th scope="column">Total</th>
          </RecipeTableHeader>
        </thead>
        <tbody>
          {recipeDetails.map(row => {
            const key = recipeDetails.indexOf(row);
            return (
              <RecipeDetailsRow
                key={key}
                dispatch={dispatch}
                idx={key}
                RecipeDetail={row}
              />
            );
          })}
        </tbody>
      </RecipeTable>
      <TableUpdateButtonsContainer>
        <UpdateTableButton
          color="primary"
          onClick={() =>
            dispatch({
              type: "ADD_NEW_INGREDIENT",
              payload: {
                icon: IconApple,
                itemType: "INGREDIENT",
                recipeDetails: "",
                units: "grams",
                quantity: 0
              }
            })
          }
        >
          Add Ingredient
        </UpdateTableButton>
        <UpdateTableButton
          inverted
          onClick={() =>
            dispatch({
              type: "ADD_NEW_INGREDIENT",
              payload: {
                icon: IconChefHat,
                itemType: "STAFF_TIME",
                recipeDetails: "",
                units: "minutes",
                quantity: 0
              }
            })
          }
        >
          <span>Add Staff Time</span>
        </UpdateTableButton>
        <UpdateTableButton
          inverted
          onClick={() =>
            dispatch({
              type: "ADD_NEW_INGREDIENT",
              payload: {
                icon: IconTimer,
                itemType: "PROCESS_TIME",
                recipeDetails: "",
                units: "minutes",
                quantity: 0
              }
            })
          }
        >
          <span>Add Process Time</span>
        </UpdateTableButton>
      </TableUpdateButtonsContainer>
    </div>
  );
};

export default RecipeDetailsTable;
