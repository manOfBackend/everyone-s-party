import { ActionType, createReducer } from 'typesafe-actions';
import Actions from '../../actions';

export interface LoginStore {
  loading: boolean;
  error?: string;
  isLogin?: boolean;
}

const initialState: LoginStore = {
  loading: false,
};

// eslint-disable-next-line max-len
const loginReducer = createReducer<LoginStore, ActionType<typeof Actions.loginActions>>(
  initialState
)
  .handleAction(Actions.loginActions.fetchLogin.request, () => ({
    loading: true,
  }))
  .handleAction(Actions.loginActions.fetchLogin.success, (state, { payload }) => ({
    ...state,
    loading: false,
    isLogin: payload,
  }))
  .handleAction(Actions.loginActions.fetchLogin.failure, () => ({
    loading: true,
    isLogin: false,
  }));

export default loginReducer;
