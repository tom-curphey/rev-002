import React from "react";
import MyForm from "./components/shared/formElements";

import { Route, Switch } from "react-router-dom";

import MenuPanel from "./components/menu-panel/menu-panel.component";

const MenuPage = () => <div>MENU ITEMS</div>;
const LandingPage = () => <div>LANDING PAGE</div>;

const App: React.FC = () => (
  <div>
    <MenuPanel />
    <Switch>
      <Route exact path="/menu-items" component={MenuPage} />
    </Switch>
  </div>
);

export default App;
