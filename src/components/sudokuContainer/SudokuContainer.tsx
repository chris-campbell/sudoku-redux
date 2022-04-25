import React from "react";
import DigitInputContainer from "../digitInputContainer/DigitInputContainer";
import SudokuGrid from "./sudokuGrid/SudokuGrid";
import { Sudoku } from "./styles/styles";

interface Props {
  generateGrid: () => JSX.Element[] | undefined;
}

const SudokuContainer: React.FC<Props> = ({ generateGrid }) => {
  return (
    <Sudoku>
      <SudokuGrid generateGrid={generateGrid} />
      <div className="player-number-input">
        <DigitInputContainer />
      </div>
    </Sudoku>
  );
};

export default SudokuContainer;
