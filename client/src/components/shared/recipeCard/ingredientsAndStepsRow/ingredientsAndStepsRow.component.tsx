import React from "react";

import { ReactComponent as DeleteIcon } from "../../../../assets/icon-delete.svg";

import { Actions, RecipeStep } from "../recipeCard.types";

import {
  IngredientsAndStepsRowContainer,
  IngredientsAndStepsRowInput,
  IngredientsAndStepsRowCol,
  QuantityCol,
  UnitsCol,
  TotalCol,
  IngredientsAndStepsRowFieldContainer,
  IngredientsAndStepsRowIcon,
  TotalColContainer
} from "./ingredientsAndStepsRow.styles";

import IconChefHat from "../../../../assets/icon-chef-hat.svg";
import IconTimer from "../../../../assets/icon-timer.svg";
import IconApple from "../../../../assets/icon-apple.svg";

interface IngredientsAndStepsRowProps {
  RecipeDetail: RecipeStep;
  idx: number;
  dispatch: React.Dispatch<Actions>;
}

const IngredientsAndStepsRow: React.FC<IngredientsAndStepsRowProps> = ({
  RecipeDetail,
  dispatch,
  idx
}) => {
  const { itemType, quantity, units, itemName } = RecipeDetail;

  let icon;

  switch (itemType) {
    case "INGREDIENT":
      icon = IconApple;
      break;
    case "STAFF_TIME":
      icon = IconChefHat;
      break;

    case "PROCESS_TIME":
      icon = IconTimer;
      break;
  }

  return (
    <IngredientsAndStepsRowContainer>
      <IngredientsAndStepsRowCol>
        <IngredientsAndStepsRowFieldContainer>
          <IngredientsAndStepsRowIcon src={icon} />

          <IngredientsAndStepsRowInput
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
        </IngredientsAndStepsRowFieldContainer>
      </IngredientsAndStepsRowCol>

      <QuantityCol>
        <IngredientsAndStepsRowInput
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
    </IngredientsAndStepsRowContainer>
  );
};

export default IngredientsAndStepsRow;
