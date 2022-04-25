import { Action } from "../actions";
import { ActionTypes } from "../actionTypes/actionTypes";
import { Dispatch } from "redux";

interface Digit {
  digit: number;
  static: boolean;
}

export const updateBoard = (puzzle: Digit[][]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.UPDATE_BOARD,
      payload: puzzle,
    });
  };
};
