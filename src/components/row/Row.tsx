import React from "react";
import { MemorizedCell } from "../cell/Cell";

interface Props {
  colIndex: number;
  col: Digit[];
  board: Digit[][];
  changeCurrentDigit: (digit: number) => void;
}

interface Digit {
  digit: number;
  static: boolean;
}

const Row: React.FC<Props> = ({ col, colIndex, board, changeCurrentDigit }) => {
  return (
    <tr col-data={colIndex}>
      {col.map((digit: Digit, rowIndex) => {
        return (
          <MemorizedCell
            key={`${colIndex}${rowIndex}`}
            colIndex={colIndex}
            rowIndex={rowIndex}
            digit={digit}
            board={board}
            changeCurrentDigit={changeCurrentDigit}
          />
        );
      })}
    </tr>
  );
};

export default Row;
