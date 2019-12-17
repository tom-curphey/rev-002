import * as React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import {
  RecipeDetailsContainer,
  RecipeDetailsInput,
  RecipeDetailsCol,
  QuantityCol,
  UnitsCol,
  TotalCol,
  UnitsInput,
  RecipeDetailsFieldContainer,
  RecipeDetailsIcon
} from "./recipe-details.styles";

import IconApple from "../../assets/icon-apple.svg";

const RecipeDetails: React.FC = () => (
  <RecipeDetailsContainer>
    <RecipeDetailsCol>
      <RecipeDetailsFieldContainer>
        <RecipeDetailsIcon src={IconApple} />
        <RecipeDetailsInput />
      </RecipeDetailsFieldContainer>
    </RecipeDetailsCol>
    <QuantityCol>
      <RecipeDetailsInput />
    </QuantityCol>
    <UnitsCol>
      <UnitsInput type="number" placeholder="min" />
    </UnitsCol>
    <TotalCol>
      <div>
        Total:
        <span>
          <button>
            <DeleteIcon />
          </button>
        </span>
      </div>
    </TotalCol>
  </RecipeDetailsContainer>
);

export default RecipeDetails;
