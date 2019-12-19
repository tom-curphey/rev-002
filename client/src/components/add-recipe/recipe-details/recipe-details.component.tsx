import * as React from "react";
import { IRecipeDetails, IActions } from "../add-recipe-card.types";
import { ReactComponent as DeleteIcon } from "../../../assets/icon-delete.svg";
import {
  RecipeDetailsContainer,
  RecipeDetailsInput,
  RecipeDetailsCol,
  QuantityCol,
  UnitsCol,
  TotalCol,
  RecipeDetailsFieldContainer,
  RecipeDetailsIcon,
  TotalColContainer,
  RecipeTable,
  RecipeTableHeader,
  TableUpdateButtonsContainer,
  UpdateTableButton
} from "./recipe-details.styles";

import IconChefHat from "../../../assets/icon-chef-hat.svg";
import IconTimer from "../../../assets/icon-timer.svg";
import IconApple from "../../../assets/icon-apple.svg";

interface IRecipeDetailRowProps {
  icon?: any;
  total?: number;
  quantity: number;
  units: string;
  num: number;
  dispatch: React.Dispatch<IActions>;
}

interface IRecipeTableProps {
  recipeDetails: IRecipeDetails[];
  dispatch: React.Dispatch<IActions>;
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
                dispatch={dispatch}
                key={key}
                num={key}
                {...row}
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
                recipeDetails: "",
                units: "grams",
                quantity: 0
              }
            })
          }
        >
          Add Ingredient
        </UpdateTableButton>
        <UpdateTableButton inverted>
          <span>Add Staff Time</span>
        </UpdateTableButton>
        <UpdateTableButton inverted>
          <span>Add Process Time</span>
        </UpdateTableButton>
      </TableUpdateButtonsContainer>
    </div>
  );
};

const RecipeDetailsRow: React.FC<IRecipeDetailRowProps> = ({
  icon,
  num: idx,
  quantity,
  units,
  dispatch
}: IRecipeDetailRowProps) => (
  <RecipeDetailsContainer>
    <RecipeDetailsCol>
      <RecipeDetailsFieldContainer>
        <RecipeDetailsIcon src={icon} />
        <RecipeDetailsInput type="text" />
      </RecipeDetailsFieldContainer>
    </RecipeDetailsCol>
    <QuantityCol>
      <RecipeDetailsInput type="text" />
    </QuantityCol>
    <UnitsCol>
      <p>{units}</p>
    </UnitsCol>
    <TotalCol>
      <TotalColContainer>
        <span>
          Total: {quantity} {units}
        </span>
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_ITEM",
              payload: idx
            })
          }
        >
          <DeleteIcon />
        </button>
      </TotalColContainer>
    </TotalCol>
  </RecipeDetailsContainer>
);

export default RecipeDetailsTable;
