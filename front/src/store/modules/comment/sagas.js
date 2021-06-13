import { takeLatest, all, put } from 'redux-saga/effects';
import api from '../../../services/api'

import { commentSetSuccess, commentAddSuccess } from './actions';

export function* loadcomment({ payload }) {
  const { postId } = payload
  try {
    const responseComment = yield api.get('/comments');
    const postFilter = responseComment.data.filter((x) => x.postId === postId);
    yield put(commentSetSuccess(postFilter));
  } catch (err) {
    return err;
  }
}
export function* addComment({ payload }) {
  const newComments = [
    ...payload.comments,
    {
      id: payload.comments.length + 10,
      ...payload.comment,
    },
  ]
  yield put(commentAddSuccess(newComments));

}
export default all([
  takeLatest('@comment/COMMENT_SET', loadcomment),
  takeLatest('@comment/COMMENT_ADD', addComment),
]);
