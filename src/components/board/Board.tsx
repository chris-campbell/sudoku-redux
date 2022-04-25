import React, { useState, useEffect } from "react";
import { Grid } from "react-loader-spinner";
import { PageLoader, BoardContainer } from "./styles/styles";
import SudokuContainer from "../sudokuContainer/SudokuContainer";
import { useBeforeunload } from "react-beforeunload";
import { useSelector } from "react-redux";
import { State } from "../../redux";
import Row from "../row/Row";

interface Digit {
  digit: number;
  static: boolean;
}

const Board: React.FC = () => {
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [currentDigit, setCurrentDigit] = useState<number>();

  const puzzle = useSelector((state: State) => state.puzzle);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    highlightDigit(puzzle);
  });

  useBeforeunload((event) => {
    if (event) {
      event.preventDefault();
    }
  });

  const generateGrid = (): JSX.Element[] => {
    return puzzle!.map(
      (col: Digit[], colIndex: number): JSX.Element => {
        return (
          <Row
            key={`${colIndex} ${col[colIndex]}`}
            col={col}
            colIndex={colIndex}
            board={puzzle}
            changeCurrentDigit={changeCurrentDigit}
          />
        );
      }
    );
  };

  const removeDigitHighlight = (board: Digit[][]): void => {
    for (let y = 0; y < board?.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        const classInList = document
          .getElementById(`${y}${x}`)
          ?.classList.contains("highlight");
        if (classInList) {
          document.getElementById(`${y}${x}`)!.classList.remove("highlight");
        }
      }
    }
  };

  const highlightDigit = (board: Digit[][]): void => {
    removeDigitHighlight(board);
    for (let y = 0; y < board?.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        if (entryEqualCellDigit(board, y, x, Number(currentDigit))) {
          document.getElementById(`${y}${x}`)!.classList.add("highlight");
        }
      }
    }
  };

  const entryEqualCellDigit = (
    board: Digit[][],
    y: number,
    x: number,
    currentDigit: number
  ) => {
    return (
      board[y][x].digit === Number(currentDigit) && Number(currentDigit) > 0
    );
  };

  const changeCurrentDigit = (digit: number): void => {
    setCurrentDigit(digit);
  };

  if (loaded === false)
    return (
      <PageLoader className="page-loader">
        <Grid height="50" width="50" color="#316dca" ariaLabel="loading" />
      </PageLoader>
    );

  return (
    <BoardContainer className="board">
      <h1>Sudoku</h1>
      <SudokuContainer generateGrid={generateGrid} />
    </BoardContainer>
  );
};

export default Board;
