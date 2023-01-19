import { all, fork } from 'redux-saga/effects';
import { watcherIrregularVerbs } from './irregularVerbsSaga';



export function* rootSaga() {
  // yield all([
  //   watcherAdmin(),
  // ])
  yield fork(watcherIrregularVerbs)
}