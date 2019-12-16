import React from "react";
import MyForm from "./components/shared/formElements";

import { Route, Switch } from "react-router-dom";

const MenuPage = () => <div>MENU ITEMS</div>;
const LandingPage = () => <div>LANDING PAGE</div>;

const App: React.FC = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/menu-items" component={MenuPage} />
    </Switch>
  </div>
);

export default App;
