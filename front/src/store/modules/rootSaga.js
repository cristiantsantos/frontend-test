import { all } from 'redux-saga/effects';
import comment from './comment/sagas';
import allposts from './allposts/sagas';

export default function* rootSaga() {
  return yield all([ comment, allposts ]);
}
