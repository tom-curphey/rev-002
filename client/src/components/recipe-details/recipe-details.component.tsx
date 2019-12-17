import * as React from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import { RecipeDetailsContainer } from "./recipe-details.styles";

const RecipeDetails: React.FC = () => (
  <RecipeDetailsContainer>
    <td>
      <input />
    </td>
    <td>
      <input />
    </td>
    <td>
      <input type="number" placeholder="min" />
    </td>
    <td>
      <div>
        Total:
        <span>
          <button>
            <DeleteIcon />
          </button>
        </span>
      </div>
    </td>
  </RecipeDetailsContainer>
);

export default RecipeDetails;
