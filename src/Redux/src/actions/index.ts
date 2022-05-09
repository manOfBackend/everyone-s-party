import RouterActions from 'redux-first-history';
import * as postActions from './src/post.action';
import * as loginActions from './src/login.action';
import * as signupActions from './src/signup.action';

const Default = {
  routerActions: RouterActions,
  postActions,
  loginActions,
  signupActions,
};
export default Default;
