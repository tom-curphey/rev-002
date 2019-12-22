import * as React from "react";
import { ButtonRoundContainer } from "./buttonRound.styles";
import { IProps } from "./buttonRound.types";

const ButtonRound: React.FC<IProps> = ({ children, ...otherProps }) => (
  <ButtonRoundContainer {...otherProps}>{children}</ButtonRoundContainer>
);
export default ButtonRound;
