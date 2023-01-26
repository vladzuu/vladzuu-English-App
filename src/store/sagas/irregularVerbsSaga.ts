import { APPLY_VIEW_OPTION_VERBS } from './../actionTypes/actionTypes';
import { ADD_VERB, IAddVerb } from '../actionTypes/actionTypes';
import { put, takeEvery } from "redux-saga/effects";
import { applyViewOption } from '../slice/irregularVerbsSlice';

function* addVerb(payload: any) {
  yield put(applyViewOption(payload))
}

export function* watcherIrregularVerbs() {
  yield takeEvery(APPLY_VIEW_OPTION_VERBS, addVerb)
}