import { data } from "../../components/data";
import { ADD_BASKET, ADD_COUNT, DELETE_BASKET } from "../action/action";
const initialState = {
  id: 0,
  count: 0,
  bookList: data,
  card: [],
};

export const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET:
      return { ...state, card: [...state.card, action.payload] };
    case ADD_COUNT:
      return { ...(state.count + action.payload) };
    case DELETE_BASKET:
      return {
        ...state,
        card: [state.card.filter((post) => post.id !== action.payload)],
      };

    default:
      return state;
  }
};
