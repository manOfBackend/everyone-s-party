/* eslint-disable max-len */
import API from '@src/services/api';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import * as yup from 'yup';
// import { SchemaOf, string } from 'yup';
import Actions from '../../actions';

function* fetchLoginSaga({ payload }: { payload: LoginRequestBody }) {
  const { fetchLogin } = Actions.loginActions;
  const schema = yup.object().shape({
    id: yup.string()
      .min(5, '아이디는 최소 5글자 이상입니다.')
      .max(16, '아이디는 최대 16글자 입니다.')
      .required('아이디를 입력하세요.'),
    pw: yup.string()
      .min(4, '비밀번호는 최소 4글자 이상입니다.')
      .max(16, '비밀번호는 최대 16글자 입니다.')
      .required('비밀번호를 입력하세요.'),
  });
  try {
    yield schema.validate(payload);

    let response = {} as LoginResponseBody;
    response = yield call(API.login, payload);
    yield put(fetchLogin.success(response));
  } catch (error) {
    yield put(fetchLogin.success({ isLogin: false, message: JSON.stringify(error.message) }));
  }
}

function* onFetchRequestWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeLatest(fetchLogin.request, fetchLoginSaga);
}

export default [fork(onFetchRequestWatcher)];
