import {all} from '@redux-saga/core/effects';

import {n10Saga} from '../listProduct/saga';

export function* rootSagas() {
  yield all([n10Saga()]);
}
