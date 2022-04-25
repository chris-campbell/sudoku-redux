import React from "react";
import { NumberButton, DigitInputButtons } from "./styles/styles";

const DigitInput: React.FC = () => {
  const setInputButtons = () => {
    const inputDigits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return inputDigits.map((digit: number) => {
      return (
        <NumberButton id={`btn-${digit}`} onMouseDown={(e) => setDigit(e)}>
          {digit}
        </NumberButton>
      );
    });
  };

  const setDigit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    const buttonId = e.currentTarget.id;
    const activeElementId = document.activeElement?.id;
    const buttonInnerDigit = document.getElementById(buttonId)?.innerText;
    const writableActiveCell: HTMLElement | null = document.getElementById(
      activeElementId || ""
    );

    if (writableActiveCell) {
      writableActiveCell.innerText = buttonInnerDigit || "";
    }
  };

  return (
    <DigitInputButtons className="digit-input-buttons">
      {setInputButtons()}
    </DigitInputButtons>
  );
};

export default DigitInput;
