import styled from "styled-components";
import ButtonRound from "../../buttonRound/buttonRound.component";

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
`;

export const RecipeNameInput = styled.input`
  width: 340px;
  height: 60px;
  margin-left: 10px;
  top: 142px;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
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
