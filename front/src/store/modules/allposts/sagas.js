import { takeLatest, all, put, call } from 'redux-saga/effects';

import { allpostsSetSuccess, postDeleteSuccess } from './actions';
import api from '../../../services/api'

export function* loadallposts() {
  try {
    const response = yield call(api.get, '/posts')
    const imgPost = response.data.map(post => ({
      ...post,
      img: `https://avatars2.githubusercontent.com/u/${Math.floor(Math.random() * 300) + 1}?s=500`
    }))
    yield put(allpostsSetSuccess(imgPost));
  } catch (err) {
  }
}
export function* deleteposts({ payload }) {
  const newposts = payload.posts.filter(x => x.id !== payload.id)
  yield put(postDeleteSuccess(newposts));
}

export default all([
  takeLatest('@allposts/ALLPOSTS_SET', loadallposts),
  takeLatest('@allposts/ALLPOSTS_DELETE', deleteposts),
]);
