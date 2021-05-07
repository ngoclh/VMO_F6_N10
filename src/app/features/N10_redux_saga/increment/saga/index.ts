import {takeEvery, takeLatest} from 'redux-saga/effects';

import {INCREMENT} from '../reducer/actionTypes';

import * as Saga from './saga';

export function* n10Saga() {
  yield takeLatest(INCREMENT, Saga.increment2);
}
