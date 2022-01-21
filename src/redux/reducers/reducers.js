import {
  GET_CATS,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/actions";

const initialState = {
  cat: [],
  favorites: [],
};

function catsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload };
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (cat) => cat.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}

export default catsReducer;
