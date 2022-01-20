import { GET_BOOKS, ADD_TO_BOOKMARK_LIST, REMOVE_FROM_BOOKMARK_LIST } from "./actions";

const initialState = {
    books: [],
    bookmarks: []
}

const booksReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, books: action.payload};
            case ADD_TO_BOOKMARK_LIST:
            return {...state, bookmarks: [...state.bookmarks, action.payload]};
            case REMOVE_FROM_BOOKMARK_LIST:
            return {...state, bookmarks: state.bookmarks.filter(book => book.id !== action.payload.id)};
            default:
                return state;
    }
}

export default booksReducer