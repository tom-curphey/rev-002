import * as React from "react";
import {
  RecipeCardContainer,
  CardTop,
  CardButton,
  RecipeInputs,
  RecipeTable,
  RecipeTableHeader
} from "./add-recipe.styles";

import RecipeDetails from "../recipe-details/recipe-details.component";

const RecipeCard: React.FC = () => (
  <RecipeCardContainer>
    <CardTop>
      <CardButton inverted>
        <span>Add Recipe Name +</span>
      </CardButton>
      <RecipeInputs>
        <li>
          <div>
            <label>Recipe Serves</label>
            <input />
          </div>
        </li>
        <li>
          <div>
            <label>Sales Price Per Serve</label>
            <input />
          </div>
        </li>
        <li>
          <div>
            <label>Expected Weekly Sales Per Serve</label>
            <input />
          </div>
        </li>
      </RecipeInputs>
    </CardTop>
    <RecipeTable>
      <RecipeTableHeader>
        <th scope="column">Recipe Details</th>
        <th scope="column">Quantity</th>
        <th scope="column">Units</th>
        <th scope="column">Total</th>
      </RecipeTableHeader>
      <RecipeDetails />
    </RecipeTable>
  </RecipeCardContainer>
);

export default RecipeCard;
