import {
  ADD_TO_FAVORITES,
  GET_CATS,
  REMOVE_FROM_FAVORITES
} from "../actions/actions";
import type { Cat } from "../../types";

const initialState = {
  cats: [],
  favorites: []
};

function catsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (cat: Cat) => cat.id !== action.payload.id
        )
      };
    default:
      return state;
  }
}

export default catsReducer;
