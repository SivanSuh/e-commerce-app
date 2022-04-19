import { createStore } from "redux";
// import rootReducer from "./reducer";
import { Reducers } from "./reducer/reducer";
export const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
