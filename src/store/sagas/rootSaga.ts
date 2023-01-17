import { all, fork } from 'redux-saga/effects';
import { watcherAdmin } from './adminSaga';



export function* rootSaga() {
  // yield all([
  //   watcherAdmin(),
  // ])
  yield fork(watcherAdmin)
}