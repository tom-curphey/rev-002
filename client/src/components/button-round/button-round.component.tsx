import * as React from "react";
import { ButtonRoundContainer } from "./button-round.styles";
import { IProps } from "./button-round.types";

const ButtonRound: React.FC<IProps> = ({ children, ...otherProps }) => (
  <ButtonRoundContainer {...otherProps}>{children}</ButtonRoundContainer>
);
export default ButtonRound;
