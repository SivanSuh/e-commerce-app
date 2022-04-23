import { data } from "../../components/data";
import { ADD_BASKET, DELETE_BASKET } from "../action/action";
const initialState = {
  bookList: data,
  card: [],
};

export const addItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return {
        ...state,
        card: state.card.find((cardItem) => cardItem.id === action.payload.id)
          ? state.card.map((cardItem) =>
              cardItem.id === action.payload.id
                ? {
                    ...cardItem,
                    quantity: cardItem.quantity + 1,
                  }
                : cardItem
            )
          : [...state.card, { ...action.payload, quantity: 1 }],
      };

    case DELETE_BASKET:
      return {
        ...state,
        card: state.card.filter((post) => post.id !== action.payload.id),
      };

    default:
      return state;
  }
};
