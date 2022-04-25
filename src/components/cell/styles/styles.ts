import styled from "styled-components";

interface Digit {
  num: number;
}

export const InputCell = styled.td<Digit>`
  div {
    color: #8b8b8b;
  }
  &:focus {
    background-color: lightblue;
    outline: none;
  }
  /* .occupied {
    font-size: 2rem;
    pointer-events: all;
    background-color: "#eeeeee";
    div {
      color: #8b8b8b;
    }
    &:focus {
      background-color: #eaf5ff;
      outline: none;
    }
  } */
`;
