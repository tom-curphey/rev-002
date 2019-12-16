import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuPanelContainer = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.background};
  height: 100%;
`;

export const MenuPanelOption = styled(Link)``;
