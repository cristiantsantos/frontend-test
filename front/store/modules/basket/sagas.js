import { takeLatest, all, put } from 'redux-saga/effects';
// import history from '~/services/history';

import { basketSetSuccess } from './actions';

export function* loadBasket({ payload }) {
  yield put(basketSetSuccess(payload.data));
  // history.push('/editbasket/')
}

export default all([
  takeLatest('@basket/BASKET_SET', loadBasket),
]);
