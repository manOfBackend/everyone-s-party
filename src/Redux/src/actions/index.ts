import RouterActions from 'redux-first-history';
import * as postActions from './src/post.action';
import * as loginActions from './src/login.action';

const Default = {
  routerActions: RouterActions,
  postActions,
  loginActions,
};
export default Default;
