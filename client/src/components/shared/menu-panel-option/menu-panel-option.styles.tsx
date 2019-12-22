import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsSideMenuContainer = styled.div``;

export const MenuLink = styled(Link)`
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const MenuOptionText = styled.span`
  font-family: "Montserrat", sans-serif;

  color: ${({ theme }) => theme.text.default};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: 10%;
`;
