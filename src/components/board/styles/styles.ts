import styled from "styled-components";

export const BoardContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-top: 5rem;
  h1 {
    margin: 0;
  }

  .purple {
    background-color: purple;
  }

  .highlight {
    background-color: #c8edff;
  }

  .no-highlight {
    background-color: #fff;
  }
`;

export const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;
