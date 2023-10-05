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

export const getAllEntries = () => {
  return { type: entriesTypes.GET_ENTRIES };
};

export const populateEntries = (entries) => {
  return { type: entriesTypes.POPULATE_ENTRIES, payload: entries };
};

export const populateEntryDetails = (id, entry) => {
  return { type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry } };
};
