import { ADD_VERB, IAddVerb } from './../actionTypes/actionTypes';
import { put, takeEvery } from "redux-saga/effects";
import { addNewVerb } from '../slice/irregularVerbsSlice';

function* addVerb(payload: IAddVerb) {
  yield put(addNewVerb(payload))
}

export function* watcherAdmin() {
  yield takeEvery(ADD_VERB, addVerb)
}