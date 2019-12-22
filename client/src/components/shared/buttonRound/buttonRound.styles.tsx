import styled, { css } from "styled-components";
import { IProps } from "./buttonRound.types";

const buttonColorStyles = ({ color, inverted }: IProps) => {
  let buttonColor: string = `textContrast`;

  if (color) {
    buttonColor = color;
  }

  return inverted
    ? css`
    background: #ffffff
    border: 1px solid;
    
    color: ${({ theme }) => theme[buttonColor].default} 
    span {
      color: black;
    }
      &:hover{
        color: ${({ theme }) => theme[buttonColor].faded}
        cursor: pointer;
      }
    `
    : css`
  background: ${({ theme }) => theme[buttonColor].default}
  color: #ffffff;
  &:hover{
    background: ${({ theme }) => theme[buttonColor].faded}
    cursor: pointer;
  }
  `;
};

export const ButtonRoundContainer = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  border: none;
  padding: 6px 30px;

  ${buttonColorStyles}
`;
