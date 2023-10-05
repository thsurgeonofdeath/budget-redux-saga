import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entriesTypes";

export function* addEntrySaga() {
  yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb);
}

function* addEntryToDb({ payload }) {
  yield call(addEntry, payload);
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload }); // No need to add entry details
}

async function addEntry({ id, description, isExpense, value }) {
  await axios.post("http://localhost:3001/entries", {
    id,
    description,
    isExpense,
    value,
  });
}
