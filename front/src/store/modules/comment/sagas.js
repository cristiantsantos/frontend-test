import { takeLatest, all, put } from 'redux-saga/effects';

import { commentSetSuccess } from './actions';

export function* loadcomment({ payload }) {
  const { postId, id, name, email, body } = payload

 yield put(commentSetSuccess(postId, id, name, email, body));
}

export default all([
 takeLatest('@comment/COMMENT_SET', loadcomment),
]);
