/* eslint-disable no-alert */
import API from '@src/services/api';
import { push } from 'redux-first-history';
import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import Actions from '../../actions';

function* fetchSignupSaga({ payload }: { payload: SignupRequestBody }) {
  const { fetchSignup } = Actions.signupActions;

  try {
    const response: SignupResponseBody = yield call(API.signup, payload);

    if (response.isSuccess) {
      yield put(fetchSignup.success(response));
    } else {
      yield put(fetchSignup.failure({ message: response.message ? response.message : '인증 실패', status: 401 }));
    }
  } catch (error) {
    yield put(fetchSignup.failure({ message: JSON.stringify(error), status: 500 }));
  }
}

function* fetchSignupSuccessSaga({ payload }: { payload: SignupResponseBody }) {
  yield alert(payload.message);
  yield put(push('/board'));
}
function* fetchSignupFailureSaga({ payload }: { payload: RequestValidationError }) {
  const { message } = payload;
  yield alert(message);
  yield put(push('/signup'));
}

function* onFetchRequestWatcher() {
  const { fetchSignup } = Actions.signupActions;
  yield takeLatest(fetchSignup.request, fetchSignupSaga);
}

function* onFetchSuccessWatcher() {
  const { fetchSignup } = Actions.signupActions;
  yield takeLatest(fetchSignup.success, fetchSignupSuccessSaga);
}

function* onFetchFailureWatcher() {
  const { fetchSignup } = Actions.signupActions;
  yield takeLatest(fetchSignup.failure, fetchSignupFailureSaga);
}

export default [
  fork(onFetchRequestWatcher),
  fork(onFetchSuccessWatcher),
  fork(onFetchFailureWatcher),
];
