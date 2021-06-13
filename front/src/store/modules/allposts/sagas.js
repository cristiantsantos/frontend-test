import { takeLatest, all, put, call } from 'redux-saga/effects';

import { allpostsSetSuccess, postDeleteSuccess, postAddSuccess } from './actions';
import api from '../../../services/api'

export function* loadallPosts() {
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
export function* deletePosts({ payload }) {
  const newposts = payload.posts.filter(x => x.id !== payload.id)
  yield put(postDeleteSuccess(newposts));
}

export function* addPosts({ payload }) {
  const newposts = [
    {
      id: payload.posts.length + 100,
      img: `https://avatars2.githubusercontent.com/u/${Math.floor(Math.random() * 300) + 1}?s=500`,
      ...payload.post,
    },
    ...payload.posts
  ]
  yield put(postAddSuccess(newposts));
}

export default all([
  takeLatest('@allposts/ALLPOSTS_SET', loadallPosts),
  takeLatest('@allposts/ALLPOSTS_DELETE', deletePosts),
  takeLatest('@allposts/ALLPOSTS_ADD', addPosts),
]);
