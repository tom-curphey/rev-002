import styled from "styled-components";
import { Link } from "react-router-dom";

export const OptionsSideMenuContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLink = styled(Link)`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.text.default};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const MenuIcon = styled.div``;
