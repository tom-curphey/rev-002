import styled from "styled-components";
import ButtonRound from "../../button-round/button-round.component";

export const RecipeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const RecipeTableHeader = styled.tr`
  background: ${({ theme }) => theme.background};
  height: 40px;
`;

export const TableUpdateButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const UpdateTableButton = styled(ButtonRound)`
  border-radius: unset;
  height: 40px;
`;

export const RecipeDetailsContainer = styled.tr`
  text-align: center;
  height: 60px;
`;

export const RecipeDetailsInput = styled.input`
  width: 90%;
`;

export const RecipeDetailsFieldContainer = styled.div`
  dipslay: flex;

  align-items: center;
`;

export const UnitsInput = styled.input`
  border: none;
  background: none;
`;

export const RecipeDetailsCol = styled.td`
  width: 48%;
`;

export const QuantityCol = styled.td`
  width: 13%;
  padding: 0 2%;
`;

export const UnitsCol = styled.td`
  width: 15%;
`;

export const TotalCol = styled.td`
  width: 20%;
  text-align: center;
  button {
    border: none;
    background: none;
    padding: 0 0 0 10px;
  }
`;

export const TotalColContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 10px;
`;

export const RecipeDetailsIcon = styled.img`
  padding: 0 6px 0 4px;
`;
