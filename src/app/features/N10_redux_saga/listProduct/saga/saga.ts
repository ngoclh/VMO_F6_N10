import {Action} from 'redux';
import axios, {Method} from 'axios';
import {ProductType} from '@model/N10_Saga';

export function* request({
  method,
  url,
}: {
  method: Method;
  url: string;
}): Generator<unknown, any, any> {
  return yield axios({method, url})
    .then(res => {
      return res.data;
    })
    .catch(() => {
      return null;
    });
}

export function* getListProduct(action: Action) {
  const {url, setData} = action.payload;
  const response: Array<ProductType> = yield request({
    method: 'GET',
    url: url,
  });
  console.log(response);
  if (response) {
    if (setData && typeof setData === 'function') {
      setData(response);
    }
  }
}
