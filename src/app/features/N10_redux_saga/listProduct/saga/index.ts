import {takeLatest} from 'redux-saga/effects';

import {GET_LIST_PRODUCTS} from '../reducer/actionTypes';

import * as Saga from './saga';

export function* n10Saga() {
  yield takeLatest(GET_LIST_PRODUCTS, Saga.getListProduct);
}
