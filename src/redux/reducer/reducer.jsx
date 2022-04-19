import { data } from "../../components/data";
import {
  ADD_BASKET,
  ADD_COUNT,
  CARD_INCREASE,
  DELETE_BASKET,
} from "../action/action";
const initialState = {
  id: 0,
  count: 0,
  bookList: data,
  card: [],
};
//...state, card: [...state.card, action.payload]
export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return {
        ...state,
        card: state.card.find((cardItem) => cardItem.id === action.payload.id)
          ? state.card.map((cardItem) =>
              cardItem.id === action.payload.id
                ? { ...cardItem, quantity: cardItem.quantity + 1 }
                : cardItem
            )
          : [...state.card, { ...action.payload, quantity: 1 }],
      };
    case ADD_COUNT:
      return { ...state, count: state.count + 1 };
    case DELETE_BASKET:
      return {
        ...state,
        card: state.card.filter((post) => post.id !== action.payload.id),
      };
    case CARD_INCREASE:
      return {
        ...state,
        card: state.card.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
