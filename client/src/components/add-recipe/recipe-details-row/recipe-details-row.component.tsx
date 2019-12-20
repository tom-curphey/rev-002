import React from "react";

import { ReactComponent as DeleteIcon } from "../../../assets/icon-delete.svg";

import { Actions } from "../add-recipe-card.types";

import {
  RecipeDetailsContainer,
  RecipeDetailsInput,
  RecipeDetailsCol,
  QuantityCol,
  UnitsCol,
  TotalCol,
  RecipeDetailsFieldContainer,
  RecipeDetailsIcon,
  TotalColContainer
} from "./recipe-details-row.styles";

interface IRecipeDetailRowProps {
  icon?: any;
  total?: number;
  quantity: number;
  units: string;
  idx: number;
  dispatch: React.Dispatch<Actions>;
}

const RecipeDetailsRow: React.FC<IRecipeDetailRowProps> = ({
  icon,
  idx,
  quantity,
  units,
  dispatch
}: IRecipeDetailRowProps) => (
  <RecipeDetailsContainer>
    <RecipeDetailsCol>
      <RecipeDetailsFieldContainer>
        <RecipeDetailsIcon src={icon} />
        <RecipeDetailsInput
          type="text"
          onChange={e =>
            dispatch({
              type: "UPDATE_RECIPE_DETAILS",
              payload: {
                id: idx,
                event: e.target.value
              }
            })
          }
        />
      </RecipeDetailsFieldContainer>
    </RecipeDetailsCol>
    <QuantityCol>
      <RecipeDetailsInput
        type="text"
        onChange={e =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
              id: idx,
              icon: icon,
              event: parseInt(e.target.value)
            }
          })
        }
      />
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

export default RecipeDetailsRow;
