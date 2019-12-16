import * as React from "react";
import { IProps } from "./menu-panel-option.types";
import {
  OptionsSideMenuContainer,
  MenuLink,
  MenuIcon
} from "./menu-panel-option.styles";

const MenuPanelOption: React.FC<IProps> = ({ optionName, link }: IProps) => (
  <OptionsSideMenuContainer>
    <MenuLink to={link}>{optionName}</MenuLink>
  </OptionsSideMenuContainer>
);

export default MenuPanelOption;
