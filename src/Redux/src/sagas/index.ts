import { all } from 'redux-saga/effects';
import postSaga from './src/post.saga';
import loginSaga from './src/login.saga';

function* rootSaga() {
  yield all([...loginSaga, ...postSaga]);
}

export default rootSaga;
