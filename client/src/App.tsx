import React from "react";

import { Route, Switch } from "react-router-dom";

import MenuPanel from "./components/shared/menu-panel/menu-panel.component";
import { default as RecipeCard } from "./components/shared/recipeCard/recipeCard.container";
import { GlobalStyle } from "./global.styles";

const MenuPage = () => <div>MENU PAGE</div>;

const App: React.FC = () => (
  <div>
    <GlobalStyle />
    <MenuPanel />
    <Switch>
      <Route exact path="/menu-items" component={MenuPage} />
      <Route exact path="/" component={RecipeCard} />
    </Switch>
  </div>
);

export default App;
