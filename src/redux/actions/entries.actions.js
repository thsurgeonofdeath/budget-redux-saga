import entriesTypes from "../actions/entriesTypes";

export const addEntryRedux = (payload) => {
  return { type: entriesTypes.ADD_ENTRY, payload };
};
export const removeEntryRedux = (id) => {
  return { type: entriesTypes.REMOVE_ENTRY, payload: { id } };
};

export const updateEntryRedux = (id, entry) => {
  return { type: entriesTypes.UPDATE_ENTRY, payload: { id, entry } };
};
