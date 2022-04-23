import { all } from 'redux-saga/effects';
import postSaga from './src/post.saga';

function* rootSaga() {
  yield all([...postSaga]);
}

export default rootSaga;
