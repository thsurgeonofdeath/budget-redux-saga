import entriesTypes from "../actions/entriesTypes";

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case entriesTypes.OPEN_EDIT_MODAL:
      return { ...state, isOpen: true, id: action.payload.id };
    case entriesTypes.CLOSE_EDIT_MODAL:
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};
