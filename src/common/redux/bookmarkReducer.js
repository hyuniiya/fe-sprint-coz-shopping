import { ADD_TO_BOOKMARK, REMOVE_FROM_BOOKMARK } from "./actions";

const initialState = {
  bookmarks: [],
};

export const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_FROM_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};