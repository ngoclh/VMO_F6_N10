import {call, delay, race, take} from '@redux-saga/core/effects';
import {Action} from 'redux';

import {CONTINUE_INCREMENT} from '../reducer/actionTypes';

export function* increment(action: Action) {
  console.log(action);
  yield take(CONTINUE_INCREMENT);
  const {payload} = action;
  if (
    payload &&
    payload.onSetNewValue &&
    typeof payload.onSetNewValue === 'function'
  ) {
    yield call(payload.onSetNewValue);
  }
}
export function* increment2(action: Action) {
  const [takeOk, delayOK] = yield race([take(CONTINUE_INCREMENT), delay(3000)]);

  if (delayOK) {
    console.log('Delay win', delayOK);
  } else {
    console.log('Take win', takeOk);
  }
  if (takeOk) {
    const {payload} = action;
    if (
      payload &&
      payload.onSetNewValue &&
      typeof payload.onSetNewValue === 'function'
    ) {
      yield call(payload.onSetNewValue);
    }
  }
}
