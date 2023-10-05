import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entriesTypes";
import axios from "axios";
import {
  populateEntries,
  populateEntryDetails,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    console.log("haha");
    const entry = payload[index];
    yield put(populateEntryDetails(entry.id, entry)); // Passing the entire entry as details
  }
}
