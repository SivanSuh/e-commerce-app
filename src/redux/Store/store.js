import { configureStore } from "@reduxjs/toolkit";
import EcommerceReducer from "../EcommerceSlice/EcommerceSlice";
export const store = configureStore({
  reducer: {
    basket: EcommerceReducer,
  },
});
