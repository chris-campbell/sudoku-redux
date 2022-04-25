import React from "react";

interface Props {
  generateGrid: () => JSX.Element[] | undefined;
}

const SudokuGrid: React.FC<Props> = ({ generateGrid }) => {
  return (
    <table className="sudoku-grid">
      <tbody>{generateGrid()}</tbody>
    </table>
  );
};

export default SudokuGrid;
