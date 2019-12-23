import * as React from "react";
import { Actions, RecipeStep } from "../recipeCard.types";

import {
  IngredientsAndStepsTable,
  IngredientsAndStepsTableHeader,
  TableUpdateButtonsContainer,
  UpdateTableButton
} from "./ingredientsAndStepsTable.styles";

import IngredientsAndStepsRow from "../ingredientsAndStepsRow/ingredientsAndStepsRow.component";

import IconChefHat from "../../../../assets/icon-chef-hat.svg";
import IconTimer from "../../../../assets/icon-timer.svg";
import IconApple from "../../../../assets/icon-apple.svg";

interface IRecipeTableProps {
  recipeDetails: RecipeStep[];
  dispatch: React.Dispatch<Actions>;
}

const RecipeDetailsTable: React.FC<IRecipeTableProps> = ({
  recipeDetails,
  dispatch
}) => {
  return (
    <div>
      <IngredientsAndStepsTable>
        <thead>
          <IngredientsAndStepsTableHeader>
            <th scope="column">Recipe Details</th>
            <th scope="column">Quantity</th>
            <th scope="column">Units</th>
            <th scope="column">Total</th>
          </IngredientsAndStepsTableHeader>
        </thead>
        <tbody>
          {recipeDetails.map(row => {
            const key = recipeDetails.indexOf(row);
            return (
              <IngredientsAndStepsRow
                key={key}
                dispatch={dispatch}
                idx={key}
                RecipeDetail={row}
              />
            );
          })}
        </tbody>
      </IngredientsAndStepsTable>
      <TableUpdateButtonsContainer>
        <UpdateTableButton
          color="primary"
          onClick={() =>
            dispatch({
              type: "ADD_NEW_INGREDIENT",
              payload: {
                icon: IconApple,
                itemName: "",
                itemType: "INGREDIENT",

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
                itemName: "",
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
                itemName: "",
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
