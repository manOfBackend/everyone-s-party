import { combineReducers } from 'redux';
import postReducer from './src/post.reducer';
import historyContext from '../historyContext';

const rootReducer = combineReducers({
  router: historyContext.routerReducer,
  postReducer,
});

export default rootReducer;
