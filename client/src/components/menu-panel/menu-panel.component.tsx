import * as React from "react";
import { MenuPanelContainer } from "./menu-panel.styles";

import MenuPanelOption from "../menu-panel-option/menu-panel-option.component";

const MenuPanel: React.FC = () => (
  <MenuPanelContainer>
    <MenuPanelOption optionName="Recipes" link="recipes" />
    <MenuPanelOption optionName="Menu Items" link="menu-items" />
  </MenuPanelContainer>
);

export default MenuPanel;
