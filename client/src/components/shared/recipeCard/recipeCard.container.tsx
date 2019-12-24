import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import RecipeCard from "./recipeCard.component";

const ADD_NEW_RECIPE = gql`
  mutation AddNewRecipe($recipe: Recipe!) {
    addNewRecipe(recipe: $recipe) @client
  }
`;

const RecipeCardContainer: React.FC = () => (
  <Mutation mutation={ADD_NEW_RECIPE}>
    {(saveNewRecipe: any) => (
      <RecipeCard
        saveRecipe={recipe => {
          saveNewRecipe({ variables: { recipe } });
        }}
      />
    )}
  </Mutation>
);

export default RecipeCardContainer;
