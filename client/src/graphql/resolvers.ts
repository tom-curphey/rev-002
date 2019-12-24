import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Mutation {
    AddNewRecipe(recipe: Recipe!): [Recipe]
  }

  extend type Recipe {
    recipeDetails: RecipeDetails
    recipeSteps: [RecipeStep]
    staffTime: Number
    processTime: Number
    totalGrams: Number
    totalTime: Number
  }

  type RecipeDetails {
    recipeName: String
    recipeServes: Number
    salesPricePerServe: Number
    weeklySalesPerServe: Number
  }

  type RecipeStep {
    itemType: String
    itemName: String
    units: String
    quantity: Number
  }
`;

const GET_SAVED_RECIPES = gql`
  {
    savedRecipes @client
  }
`;

export const resolvers = {
  Mutation: {
    addNewRecipe: (_root: any, { recipe }: any, { cache }: any) => {
      const { savedRecipes } = cache.readQuery({
        query: GET_SAVED_RECIPES
      });

      const newSavedRecipes = savedRecipes.concat(recipe);

      cache.writeQuery({
        query: GET_SAVED_RECIPES,
        data: { savedRecipes: newSavedRecipes }
      });
    }
  }
};
