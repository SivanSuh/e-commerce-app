export const ADD_BUTTON = "ADD_BUTTON";
export const DELETE_BUTTTON = "DELETE_BUTTON";

export const addBtn = (category) => {
  return {
    type: ADD_BUTTON,
    payload: category,
  };
};
export const deleteBtn = (category) => {
  return {
    type: DELETE_BUTTTON,
    payload: category,
  };
};
