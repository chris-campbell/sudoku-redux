import styled from "styled-components";

export const DigitInputButtons = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px;
  align-items: center;
  row-gap: 0.2rem;
  column-gap: 0.2rem;
`;

export const NumberButton = styled.div`
  background-color: #f0f0f0;
  height: 60px;
  border: 2px solid #464646;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  font-size: 2rem;
  &:active {
    transform: scale(0.97);
  }
`;
