import { combineReducers } from "redux";
import reducer from "./boardReducer";

export const reducers = combineReducers({
  puzzle: reducer,
});

export type State = ReturnType<typeof reducers>;
