import React from "react";
import { InputCell } from "./styles/styles";
import { validMove } from "../../utils/gameConstraints";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

interface Digit {
  digit: number;
  static: boolean;
}

interface Props {
  colIndex: number;
  rowIndex: number;
  digit: Digit;
  board: Digit[][];
  changeCurrentDigit: (digit: number) => void;
}

const Cell: React.FC<Props> = ({
  colIndex,
  rowIndex,
  digit,
  board,
  changeCurrentDigit,
}) => {
  const dispatch = useDispatch();
  const { updateBoard } = bindActionCreators(actionCreators, dispatch);

  const callback = (mutations: MutationRecord[]) => {
    if (mutations[0].target) {
      const cell = mutations[0].target as HTMLElement;
      const element = mutations[0].addedNodes[0].parentElement!;
      const y = Number(element.attributes[0].nodeValue);
      const x = Number(element.attributes[1].nodeValue);
      const d = Number(mutations[0].addedNodes[0].nodeValue);
      const currentDigit = { digit: d, static: digit.static };

      const r = validMove(y!, x!, currentDigit, board);

      changeCurrentDigit(d);

      if (r) {
        board[y][x] = currentDigit;
        dispatch(() => updateBoard(board));
        validStyles(r, cell, "#c9deff", "#007cba");
      } else {
        board[y][x] = currentDigit;
        dispatch(() => updateBoard(board));
        validStyles(r, cell, "#ffa7a7", "#fb3737");
      }
    }
  };

  const config = {
    attributes: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true,
  };

  const getData = (e: React.FormEvent<HTMLTableCellElement>): void => {
    e.preventDefault();

    // Element to be observed.
    const cell = e.target as HTMLInputElement;

    const cellObserver = new MutationObserver(callback);
    cellObserver.observe(cell, config);
  };

  const validStyles = (
    isValid: boolean,
    cell: HTMLElement,
    background: string,
    fontColor: string
  ) => {
    if (isValid) {
      return (
        (cell.style.background = background),
        (cell.style.color = fontColor),
        (cell.style.fontSize = "2rem")
      );
    } else {
      return (
        (cell.style.background = background),
        (cell.style.color = fontColor),
        (cell.style.fontSize = "2rem")
      );
    }
  };

  return (
    <InputCell
      data-y={colIndex}
      data-x={rowIndex}
      tabIndex={-1}
      id={`${colIndex}${rowIndex}`}
      num={digit.digit}
      onClick={(e) => getData(e)}
      className={digit.static ? "occupied" : ""}
    >
      <div>{!!digit.digit && digit.digit}</div>
    </InputCell>
  );
};

export const MemorizedCell = React.memo(Cell);
