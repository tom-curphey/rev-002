import styled from "styled-components";

export const IngredientsAndStepsRowContainer = styled.tr`
  text-align: center;
  height: 60px;
`;

export const IngredientsAndStepsRowInput = styled.input`
  width: 90%;
`;

export const IngredientsAndStepsRowFieldContainer = styled.div`
  dipslay: flex;

  align-items: center;
`;

export const UnitsInput = styled.input`
  border: none;
  background: none;
`;

export const IngredientsAndStepsRowCol = styled.td`
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
  justify-content: space-between;
  margin-right: 10px;
`;

export const IngredientsAndStepsRowIcon = styled.img`
  padding: 0 6px 0 4px;
`;
