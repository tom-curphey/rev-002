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

export const MenuPanelOption = styled(Link)``;
