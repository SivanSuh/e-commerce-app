import { addBtn, ADD_BUTTON, deleteBtn } from "../action/action";

const initialState = {
  value: 0,
};

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON:
      return action.payload;

    default:
      return state;
  }
};
