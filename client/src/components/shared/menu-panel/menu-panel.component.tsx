import * as React from "react";
import { MenuPanelContainer } from "./menu-panel.styles";
import MenuPanelOption from "../menu-panel-option/menu-panel-option.component";

import IconMenuItems from "../../../assets/icon-menu-items.svg";
import IconRecipes from "../../../assets/icon-recipes.svg";
import IconIngredients from "../../../assets/icon-ingredients.svg";
import IconPackaging from "../../../assets/icon-packaging.svg";
import IconShoppingList from "../../../assets/icon-shopping-list.svg";

const MenuPanel: React.FC = () => (
  <MenuPanelContainer>
    <MenuPanelOption
      optionName="Menu Items"
      link="menu-items"
      icon={IconMenuItems}
    />
    <MenuPanelOption optionName="Recipes" link="recipes" icon={IconRecipes} />
    <MenuPanelOption
      optionName="Ingredients"
      link="ingredients"
      icon={IconIngredients}
    />
    <MenuPanelOption
      optionName="Packaging"
      link="packaging"
      icon={IconPackaging}
    />
    <MenuPanelOption
      optionName="Shopping List"
      link="shopping-list"
      icon={IconShoppingList}
    />
  </MenuPanelContainer>
);

export default MenuPanel;
