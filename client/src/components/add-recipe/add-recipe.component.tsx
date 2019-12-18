import * as React from "react";
import {
  RecipeCardContainer,
  CardTop,
  CardButton,
  RecipeInputs,
  RecipeTable,
  RecipeTableHeader,
  UpdateTableButton,
  TableUpdateButtonsContainer
} from "./add-recipe.styles";

import RecipeDetails from "../recipe-details/recipe-details.component";

import IconApple from "../../assets/icon-apple.svg";
import IconChefHat from "../../assets/icon-chef-hat.svg";
import IconTimer from "../../assets/icon-timer.svg";

interface IStateRecipeDetails {
  icon: any;
  recipeDetails: string;
  units: string;
  quantity: number;
}

const RecipeCard: React.FC = () => {
  const [listRecipeDetails, setlistRecipeDetails] = React.useState<
    IStateRecipeDetails[]
  >([
    {
      icon: IconApple,
      recipeDetails: "",
      units: "grams",
      quantity: 0
    }
  ]);

  const [total, setTotal] = React.useState<number>(0);

  React.useEffect(() => {
    setTotal(
      listRecipeDetails.reduce(
        (accumulate, item) => accumulate + item.quantity,
        0
      )
    );
  });

  const updateRecipeDetails = (key: number, input: string) =>
    setlistRecipeDetails(
      listRecipeDetails.map(item =>
        listRecipeDetails.indexOf(item) === key
          ? { ...item, recipeDetails: input }
          : item
      )
    );

  const updateQuantity = (key: number, quantity: string) => {
    let quantityUpdate = quantity;
    if (quantity === "") {
      quantityUpdate = "0";
    }

    setlistRecipeDetails(
      listRecipeDetails.map(item =>
        listRecipeDetails.indexOf(item) === key
          ? {
              ...item,
              quantity: parseInt(quantityUpdate)
            }
          : item
      )
    );
  };

  const deleteItem = (key: number) =>
    setlistRecipeDetails(
      listRecipeDetails.filter(item => listRecipeDetails.indexOf(item) !== key)
    );

  return (
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
        <thead>
          <RecipeTableHeader>
            <th scope="column">Recipe Details</th>
            <th scope="column">Quantity</th>
            <th scope="column">Units</th>
            <th scope="column">Total</th>
          </RecipeTableHeader>
        </thead>
        <tbody>
          {listRecipeDetails.map(row => {
            const key = listRecipeDetails.indexOf(row);
            return (
              <RecipeDetails
                key={key}
                onUpdateRecipeDetails={e => updateRecipeDetails(key, e)}
                onUpdateQuantity={e => updateQuantity(key, e)}
                onDeleteItem={() => deleteItem(key)}
                {...row}
              />
            );
          })}
        </tbody>
      </RecipeTable>
      <TableUpdateButtonsContainer>
        <UpdateTableButton
          color="primary"
          onClick={() => {
            setlistRecipeDetails(
              listRecipeDetails.concat({
                icon: IconApple,
                recipeDetails: "",
                units: "grams",
                quantity: 0
              })
            );
          }}
        >
          Add Ingredient
        </UpdateTableButton>
        <UpdateTableButton
          inverted
          onClick={() => {
            setlistRecipeDetails(
              listRecipeDetails.concat({
                icon: IconChefHat,
                recipeDetails: "",
                units: "minutes",
                quantity: 0
              })
            );
          }}
        >
          <span>Add Staff Time</span>
        </UpdateTableButton>
        <UpdateTableButton
          inverted
          onClick={() => {
            setlistRecipeDetails(
              listRecipeDetails.concat({
                icon: IconTimer,
                recipeDetails: "",
                units: "minutes",
                quantity: 0
              })
            );
          }}
        >
          <span>Add Process Time</span>
        </UpdateTableButton>
      </TableUpdateButtonsContainer>
      <div>TOTAL: {total}</div>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
