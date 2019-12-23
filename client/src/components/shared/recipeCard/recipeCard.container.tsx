import * as React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import RecipeCard from "./recipeCard.component";

const GET_INITIAL_RECIPE = gql`
  {
    item @client
  }
`;

const RecipeCardContainer: React.FC = () => (
  <Query query={GET_INITIAL_RECIPE}>
    {({ loading, error, data }: any) => {
      if (loading) {
        console.log(loading);
        return <div>LOADING</div>;
      }

      console.log(data);
      return <div>RETURNED</div>;
    }}
  </Query>
);

export default RecipeCardContainer;
