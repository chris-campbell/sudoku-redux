import React from "react";
import DigitalInput from "./digitInput/DigitInput";
import NewGameButton from "./newGameButton/NewGameButton";
import styled from "styled-components";

const DigitInputCnt = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const DigitInputContainer: React.FC = () => {
  return (
    <DigitInputCnt className="digit-input-container">
      <NewGameButton />
      <DigitalInput />
    </DigitInputCnt>
  );
};

export default DigitInputContainer;
