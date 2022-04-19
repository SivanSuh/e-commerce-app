export const ADD_BASKET = "ADD_BASKET";
export const ADD_COUNT = "ADD_COUNT";
export const DELETE_BASKET = "DELETE_BASKET";
export const CARD_INCREASE = "CARD_INCREASE";

export const addBasket = (book) => {
  return {
    type: ADD_BASKET,
    payload: book,
  };
};
export const countIncrease = () => {
  return {
    type: ADD_COUNT,
  };
};
export const cardIncrease = (products) => {
  return {
    type: CARD_INCREASE,
    payload: products,
  };
};
export const deleteBasket = (book) => {
  return {
    type: DELETE_BASKET,
    payload: book,
  };
};
