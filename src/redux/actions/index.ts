import { ActionTypes } from "../actionTypes/actionTypes";
interface Digit {
  digit: number;
  static: boolean;
}

interface UpdateAction {
  type: ActionTypes.UPDATE_BOARD;
  payload: Digit[][];
}

export type Action = UpdateAction;
