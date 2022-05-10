import { all } from 'redux-saga/effects';
import postSaga from './src/post.saga';
import loginSaga from './src/login.saga';
import signupSaga from './src/signup.saga';

function* rootSaga() {
  yield all([...loginSaga, ...postSaga, ...signupSaga]);
}

export default rootSaga;
