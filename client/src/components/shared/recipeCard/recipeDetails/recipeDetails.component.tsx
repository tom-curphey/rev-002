import * as React from "react";
import { CardTop, CardButton, RecipeInputs } from "./recipeDetails.styles";

const RecipeGeneral: React.FC = () => (
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
);

export default RecipeGeneral;
