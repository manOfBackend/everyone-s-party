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
  initialState,
)
  .handleAction(Actions.loginActions.fetchLogin.request, () => ({
    loading: true,
  }))
  .handleAction(Actions.loginActions.fetchLogin.success, (state, { payload }) => ({
    ...state,
    error: payload.isLogin ? undefined : payload.message,
    loading: false,
    isLogin: payload.isLogin,
  }))
  .handleAction(Actions.loginActions.fetchLogin.failure, (state, { payload }) => ({
    ...state,
    error: '',
    loading: false,
    message: payload.message,
    isLogin: false,
  }));

export default loginReducer;
