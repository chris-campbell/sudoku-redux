import { Action } from "../actions";
import { ActionTypes } from "../actionTypes/actionTypes";
import { generateBoardGrid } from "../../utils/game";

interface Digit {
  digit: number;
  static: boolean;
}

const initialState = generateBoardGrid()!.puzzle;

const reducer = (state: Digit[][] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_BOARD:
      return (state = action.payload);
    default:
      return state;
  }
};

export default reducer;
