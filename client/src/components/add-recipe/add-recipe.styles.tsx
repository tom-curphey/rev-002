import styled from "styled-components";
import ButtonRound from "../button-round/button-round.component";

export const RecipeCardContainer = styled.div`
  width: 900px;
  height: 629px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  margin: auto 10em auto auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardButton = styled(ButtonRound)`
  height: 100px;
  border: 1px solid;
  margin-left: 15px;
  span {
    font-weight: bold;
    color: black;
  }
`;

export const RecipeInputs = styled.ul`
  padding: 10px;
  list-style-type: none;
  li {
    margin: 10px;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  label {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    margin: 5px 10px;
  }

  input {
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.textContrast.default};
  }
`;

export const RecipeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const RecipeTableHeader = styled.tr`
  background: ${({ theme }) => theme.background};
  height: 40px;
`;
