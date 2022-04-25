import { makepuzzle, ratepuzzle } from "sudoku";

interface BoardItems {
  puzzle: Digit[][];
}

interface Digit {
  digit: number;
  static: boolean;
}

export const generateBoardGrid = () => {
  let puzzle: Digit[][] = [];
  let gridRow: Digit[] = [];

  const selectedDifficulty = 4;

  let generatedPuzzle: number[];
  let difficulty: number = 0;

  while (difficulty !== selectedDifficulty) {
    generatedPuzzle = makepuzzle();

    difficulty = ratepuzzle(generatedPuzzle, 4);

    if (difficulty === selectedDifficulty) {
      for (let index = 0; index <= generatedPuzzle.length; index++) {
        if (isZero(index)) {
          if (isCompletedRow(index)) puzzle.push(gridRow);
          if (isCompletedRow(index)) gridRow = [];
        }

        gridRow.push(
          Number(generatedPuzzle[index]) > 0
            ? { digit: generatedPuzzle[index], static: true }
            : { digit: generatedPuzzle[index], static: false }
        );
      }

      return { puzzle };
    }
  }
};

// Private functions
const isZero = (index: number): boolean => {
  return index % 9 === 0;
};

const isCompletedRow = (index: number): boolean => {
  return index >= 9;
};
