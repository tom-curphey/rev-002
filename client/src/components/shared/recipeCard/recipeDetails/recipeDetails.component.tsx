import React, { useState } from "react";
import {
  CardTop,
  CardButton,
  RecipeInputs,
  RecipeNameInput
} from "./recipeDetails.styles";
import { IRecipeDetails, Actions } from "../recipeCard.types";

interface RecipeDetailsProps {
  recipeDetails: IRecipeDetails;
  dispatch: React.Dispatch<Actions>;
}

const RecipeGeneral: React.FC<RecipeDetailsProps> = ({
  recipeDetails,
  dispatch
}) => {
  const {
    recipeServes,
    salesPricePerServe,
    weeklySalesPerServe
  } = recipeDetails;

  const [clicked, setClicked] = useState(false);

  return (
    <CardTop>
      {clicked ? (
        <RecipeNameInput
          onChange={e =>
            dispatch({
              type: "UPDATE_RECIPE_NAME",
              payload: e.target.value
            })
          }
        />
      ) : (
        <CardButton inverted onClick={() => setClicked(true)}>
          <span>Add Recipe Name +</span>
        </CardButton>
      )}

      <RecipeInputs>
        <li>
          <div>
            <label>Recipe Serves</label>
            <input
              type="text"
              onChange={e =>
                dispatch({
                  type: "UPDATE_RECIPE_SERVES",
                  payload: parseInt(e.target.value)
                })
              }
              value={recipeServes}
            />
          </div>
        </li>
        <li>
          <div>
            <label>Sales Price Per Serve</label>
            <input
              onChange={e =>
                dispatch({
                  type: "UPDATE_SALES_PRICE_PER_SERVICE",
                  payload: parseInt(e.target.value)
                })
              }
              value={salesPricePerServe}
            />
          </div>
        </li>
        <li>
          <div>
            <label>Expected Weekly Sales Per Serve</label>
            <input
              onChange={e =>
                dispatch({
                  type: "UPDATE_EXPECTED_WEEKLY_SALES_PER_SERVE",
                  payload: parseInt(e.target.value)
                })
              }
              value={weeklySalesPerServe}
            />
          </div>
        </li>
      </RecipeInputs>
    </CardTop>
  );
};

export default RecipeGeneral;
