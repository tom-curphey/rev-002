import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
  height: 100%;
  padding: 10px;
  width: 10em;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.default};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-left: 10%;
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
