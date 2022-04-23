export const ADD_BASKET = "ADD_BASKET";
export const DELETE_BASKET = "DELETE_BASKET";

export const addBasket = (datas) => {
  return {
    type: ADD_BASKET,
    payload: datas,
  };
};

export const deleteBasket = (book) => {
  return {
    type: DELETE_BASKET,
    payload: book,
  };
};
