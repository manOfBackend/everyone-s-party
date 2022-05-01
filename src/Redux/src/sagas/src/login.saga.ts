/* eslint-disable no-alert */
import API from '@src/services/api';
import { push } from 'redux-first-history';
import {
  call, fork, put, takeLatest,
} from 'redux-saga/effects';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import Actions from '../../actions';

function* fetchLoginSaga({ payload }: { payload: LoginRequestBody }) {
  const { fetchLogin } = Actions.loginActions;
  const schema: SchemaOf<LoginRequestBody> = yup.object().shape({
    id: yup
      .string()
      .min(5, '아이디는 최소 5글자 이상입니다.')
      .max(16, '아이디는 최대 16글자 입니다.')
      .required('아이디를 입력하세요.'),
    pw: yup
      .string()
      .min(4, '비밀번호는 최소 4글자 이상입니다.')
      .max(16, '비밀번호는 최대 16글자 입니다.')
      .required('비밀번호를 입력하세요.'),
  });

  try {
    yield schema.validate(payload);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const message = error.errors.join(', ');
      yield put(fetchLogin.failure({ message, status: 400 }));
      return;
    }
  }

  try {
    const response: LoginResponseBody = yield call(API.login, payload);
    const { message, isLogin } = response;

    if (isLogin) {
      yield put(fetchLogin.success(response));
    } else {
      yield put(fetchLogin.failure({ message: message ?? '인증 실패', status: 401 }));
    }
  } catch (error) {
    yield put(fetchLogin.failure({ message: JSON.stringify(error), status: 500 }));
  }
}

function* fetchLoginSuccessSaga({ payload }: { payload: LoginResponseBody }) {
  const { message } = payload;
  yield alert(message);
  yield put(push('/board'));
}
function* fetchLoginFailureSaga({ payload }: { payload: RequestValidationError }) {
  const { message } = payload;
  yield alert(message);
  yield put(push('/login'));
}

function* onFetchRequestWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeLatest(fetchLogin.request, fetchLoginSaga);
}

function* onFetchSuccessWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeLatest(fetchLogin.success, fetchLoginSuccessSaga);
}

function* onFetchFailureWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeLatest(fetchLogin.failure, fetchLoginFailureSaga);
}

export default [
  fork(onFetchRequestWatcher),
  fork(onFetchSuccessWatcher),
  fork(onFetchFailureWatcher),
];
