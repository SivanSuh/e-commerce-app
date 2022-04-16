export const ADD_BASKET = "ADD_BASKET";
export const ADD_COUNT = "ADD_COUNT";
export const DELETE_BASKET = "DELETE_BASKET";

export const addBasket = (book) => {
  return {
    type: ADD_BASKET,
    payload: book,
  };
};
export const countIncrease = (val) => {
  return {
    type: ADD_COUNT,
    payload: val + 1,
  };
};

export const deleteBasket = (id) => {
  return {
    type: DELETE_BASKET,
    payload: id,
  };
};
