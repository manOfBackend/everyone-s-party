import { ActionType, createReducer } from 'typesafe-actions';
import Actions from '../../actions';

export interface LoginStore {
  loading: boolean;
  account?: {
    id: string;
    pw: string;
  }[];
  error?: string;
}

const initialState: LoginStore = {
  loading: false,
};

// eslint-disable-next-line max-len
const loginReducer = createReducer<LoginStore, ActionType<typeof Actions.loginActions>>(initialState)
  .handleAction(Actions.loginActions.fetchLogin.request, () => ({
    loading: true,
  }))
  .handleAction(Actions.loginActions.fetchLogin.success, (state, { payload }) => ({
    ...state,
    loading: false,
    account: payload.account,
  }));

export default loginReducer;
