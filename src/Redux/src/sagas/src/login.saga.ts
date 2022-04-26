/* eslint-disable max-len */
import API from '@src/services/api';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import Actions from '../../actions';

function* fetchLoginSaga({ payload }: { payload: LoginRequestBody }) {
  const { fetchLogin } = Actions.loginActions;

  try {
    const response: LoginResponseBody = yield call(API.login, payload);
    yield put(fetchLogin.success(response.isLogin));
  } catch (error) {
    yield put(fetchLogin.failure(401));
  }
}

function* onFetchRequestWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeEvery(fetchLogin.request, fetchLoginSaga);
}

export default [fork(onFetchRequestWatcher)];
