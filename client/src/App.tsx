import React from "react";

import { Route, Switch } from "react-router-dom";

import MenuPanel from "./components/shared/menu-panel/menu-panel.component";
import RecipeCard from "./components/shared/recipeCard/recipeCard.component";
import { GlobalStyle } from "./global.styles";

const MenuPage = () => <div>MENU ITEMS</div>;

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
