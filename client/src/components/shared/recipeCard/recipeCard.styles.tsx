import styled from "styled-components";
import ButtonRound from "../buttonRound/buttonRound.component";

export const RecipeCardContainer = styled.div`
  width: 900px;
  min-height: 629px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  margin: auto 10em auto auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

export const TotalContainer = styled.div`
  align-self: flex-end;
  margin: 40px 20px;
  width: 30%;
`;

export const TotalUnit = styled.p`
  margin: 20px auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
