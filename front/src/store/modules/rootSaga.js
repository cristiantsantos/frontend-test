import { all } from 'redux-saga/effects';
import comment from './comment/sagas';

export default function* rootSaga() {
  return yield all([ comment ]);
}
