import { combineReducers } from 'redux';
import postReducer from './src/post.reducer';
import loginReducer from './src/login.reducer';
import historyContext from '../historyContext';

const rootReducer = combineReducers({
  router: historyContext.routerReducer,
  postReducer,
  loginReducer,
});

export default rootReducer;
