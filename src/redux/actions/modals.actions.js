import entriesTypes from "../actions/entriesTypes";

export const openEditModal = (id) => {
  return { type: entriesTypes.OPEN_EDIT_MODAL, payload: { id } };
};
export const closeEditModal = () => {
  return { type: entriesTypes.CLOSE_EDIT_MODAL };
};
