import { createSlice } from "@reduxjs/toolkit";

export const EcommerceSlice = createSlice({
  name: "e-commerce",
  initialState: {
    value: 0,
  },
  reducers: {
    addBasket: (state) => {
      state.value += 1;
    },
    deleteBasket: (state) => {
      state.value -= 1;
    },
  },
});
export const { addBasket, deleteBasket } = EcommerceSlice.actions;
export default EcommerceSlice.reducer;
