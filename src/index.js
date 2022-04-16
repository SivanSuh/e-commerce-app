import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { store } from "./redux/Store/store";
import { Reducers } from "./redux/reducer/reducer";
import { createStore } from "redux";

const store = createStore(Reducers);
const rootelement = document.getElementById("root");
const root = createRoot(rootelement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
