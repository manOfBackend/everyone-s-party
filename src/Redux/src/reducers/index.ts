import { combineReducers } from 'redux';
import postReducer from './src/post.reducer';
import loginReducer from './src/login.reducer';
import signupReducer from './src/signup.reducer';
import historyContext from '../historyContext';

const rootReducer = combineReducers({
  router: historyContext.routerReducer,
  postReducer,
  loginReducer,
  signupReducer,
});

export default rootReducer;
