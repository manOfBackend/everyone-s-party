/* eslint-disable max-len */
import API from '@src/services/api';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import * as yup from 'yup';
import { SchemaOf, string } from 'yup';
import Actions from '../../actions';

function* fetchLoginSaga({ payload }: { payload: LoginRequestBody }) {
  const { fetchLogin } = Actions.loginActions;
  const schema: SchemaOf<LoginRequestBody> = yup.object().shape({
    id: string()
      .min(5, (min: any) => `아이디는 최소 ${min}글자 이상입니다.`)
      .max(16, (max: any) => `아이디는 최대 ${max}글자 입니다.`)
      .required('아이디를 입력하세요.'),
    pw: string()
      .min(4, (min: any) => `비밀번호는 최소 ${min}글자 이상입니다.`)
      .max(16, (max: any) => `비밀번호는 최대 ${max}글자 입니다.`)
      .required('비밀번호를 입력하세요.'),
  });
  try {
    yield schema.validateSync(payload);
  } catch (error) {
    yield put(fetchLogin.failure({ status: 400, message: JSON.stringify(error) }));
  }

  let response = {} as LoginResponseBody;
  try {
    response = yield call(API.login, payload);
    yield put(fetchLogin.success(response.isLogin));
  } catch (error) {
    yield put(fetchLogin.failure({ status: 200, message: JSON.stringify(error) }));
  }
}

function* onFetchRequestWatcher() {
  const { fetchLogin } = Actions.loginActions;
  yield takeLatest(fetchLogin.request, fetchLoginSaga);
}

export default [fork(onFetchRequestWatcher)];
