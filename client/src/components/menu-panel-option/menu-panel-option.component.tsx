import * as React from "react";
import { IProps } from "./menu-panel-option.types";
import {
  OptionsSideMenuContainer,
  MenuLink,
  MenuOptionText
} from "./menu-panel-option.styles";

const MenuPanelOption: React.FC<IProps> = ({
  optionName,
  link,
  icon
}: IProps) => (
  <OptionsSideMenuContainer>
    <MenuLink to={link}>
      <img src={icon} />
      <MenuOptionText>{optionName}</MenuOptionText>
    </MenuLink>
  </OptionsSideMenuContainer>
);

export default MenuPanelOption;
