import * as entriesSaga from "./entriesSaga";
import * as deleteEntriesSaga from "./deleteEntriesSaga";
import * as addEntriesSaga from "./addEntriesSaga";

export function initSagas(sagaMiddleware) {
  //   Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(deleteEntriesSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(addEntriesSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
}
