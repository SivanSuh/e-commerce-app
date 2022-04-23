import { combineReducers } from "redux";
import { addItems } from "./addItems";

const rootReducer = combineReducers({
  values: addItems,
});

export default rootReducer;
