import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";

import { theme } from "./styles/theme";

import { resolvers, typeDefs } from "./graphql/resolvers";

const cache = new InMemoryCache();

const httpLink = createHttpLink();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
});

cache.writeData({
  data: {
    savedRecipes: []
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
