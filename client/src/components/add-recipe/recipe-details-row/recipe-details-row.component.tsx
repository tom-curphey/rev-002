import React from "react";

import { ReactComponent as DeleteIcon } from "../../../assets/icon-delete.svg";

import { Actions, IRecipeDetail } from "../add-recipe-card.types";

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
  RecipeDetail: IRecipeDetail;
  idx: number;
  dispatch: React.Dispatch<Actions>;
}

const RecipeDetailsRow: React.FC<IRecipeDetailRowProps> = ({
  RecipeDetail,
  dispatch,
  idx
}) => {
  const { icon, itemType, quantity, units, itemName } = RecipeDetail;
  return (
    <RecipeDetailsContainer>
      <RecipeDetailsCol>
        <RecipeDetailsFieldContainer>
          <RecipeDetailsIcon src={icon} />
          <RecipeDetailsInput
            type="text"
            value={itemName}
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
          value={quantity}
          onChange={e =>
            dispatch({
              type: "UPDATE_INGREDIENT_OR_TIME",
              payload: {
                id: idx,
                itemType: itemType,
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
};

export default RecipeDetailsRow;
