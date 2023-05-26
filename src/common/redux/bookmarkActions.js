export const ADD_TO_BOOKMARK = "ADD_TO_BOOKMARK";
export const REMOVE_FROM_BOOKMARK = "REMOVE_FROM_BOOKMARK";

export const addToBookmark = (itemId) => ({
  type: ADD_TO_BOOKMARK,
  payload: itemId,
});

export const removeFromBookmark = (itemId) => ({
  type: REMOVE_FROM_BOOKMARK,
  payload: itemId,
});