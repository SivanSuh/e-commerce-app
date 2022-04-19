import { combineReducers } from "redux";
import { Reducers } from "./reducer";

const rootReducer = combineReducers({
  values: Reducers,
});

export default rootReducer;
