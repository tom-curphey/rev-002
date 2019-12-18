import * as React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
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
} from "./recipe-details.styles";

interface IProps {
  icon?: any;
  total?: number;
  quantity: number;
  units: string;
  onUpdateRecipeDetails: (input: string) => void;
  onUpdateQuantity: (input: string) => void;
  onDeleteItem: () => void;
}

const RecipeDetails: React.FC<IProps> = ({
  icon,
  quantity,
  units,
  onUpdateRecipeDetails,
  onUpdateQuantity,
  onDeleteItem
}: IProps) => (
  <RecipeDetailsContainer>
    <RecipeDetailsCol>
      <RecipeDetailsFieldContainer>
        <RecipeDetailsIcon src={icon} />
        <RecipeDetailsInput
          type="text"
          onChange={e => onUpdateRecipeDetails(e.target.value)}
        />
      </RecipeDetailsFieldContainer>
    </RecipeDetailsCol>
    <QuantityCol>
      <RecipeDetailsInput
        type="text"
        onChange={e => onUpdateQuantity(e.target.value)}
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
        <button onClick={() => onDeleteItem()}>
          <DeleteIcon />
        </button>
      </TotalColContainer>
    </TotalCol>
  </RecipeDetailsContainer>
);

export default RecipeDetails;
