import API from '@src/services/api';
import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import Actions from '../../actions';

function* fetchPostsSaga({ payload }: { payload: PostsRequestBody }) {
  const { fetchPosts } = Actions.postActions;
  try {
    const response: PostsResponseBody = yield call(API.posts, payload);

    yield put(fetchPosts.success(response));
  } catch (error) {
    yield put(fetchPosts.failure(401));
  }
}

function* onFetchPostsWatcher() {
  const { fetchPosts } = Actions.postActions;
  yield takeLatest(fetchPosts.request, fetchPostsSaga);
}

export default [fork(onFetchPostsWatcher)];
