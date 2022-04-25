import _ from "lodash";

interface Digit {
  digit: number;
  static: boolean;
}

export const validMove = (
  y: number,
  x: number,
  digit: Digit,
  puzzle: Digit[][]
): boolean => {
  return (scan3x3grid(y, x, digit, puzzle) &&
    scanRow(y, digit, puzzle) &&
    scanColumn(x, digit, puzzle)) === true
    ? true
    : false;
};

// Private functions
const scanColumn = (x: number, digit: Digit, puzzle: Digit[][]): boolean => {
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i][x].digit === digit.digit) return false;
  }
  return true;
};

const scanRow = (y: number, digit: Digit, puzzle: Digit[][]): boolean => {
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[y][i].digit === digit.digit) return false;
  }
  return true;
};

const digitRange = (coord: number): number => {
  if (_.range(0, 3).includes(coord)) return 3;
  if (_.range(3, 6).includes(coord)) return 6;
  if (_.range(6, 9).includes(coord)) return 9;

  return -1;
};

const scan3x3grid = (
  yCoord: number,
  xCoord: number,
  digit: Digit,
  puzzle: Digit[][]
): boolean => {
  for (let y = digitRange(yCoord) - 3; y < digitRange(yCoord); y++) {
    for (let x = digitRange(xCoord) - 3; x < digitRange(xCoord); x++) {
      if (puzzle[y][x].digit === digit.digit) return false;
    }
  }

  return true;
};
