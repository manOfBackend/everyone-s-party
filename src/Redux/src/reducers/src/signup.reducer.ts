import { ActionType, createReducer } from 'typesafe-actions';
import Actions from '../../actions';

export interface SingupStore {
  loading: boolean;
  error?: string;
}

const initialState: SingupStore = {
  loading: false,
  error: '',
};

// eslint-disable-next-line max-len
const signupReducer = createReducer<SingupStore, ActionType<typeof Actions.signupActions>>(
  initialState,
)
  .handleAction(Actions.signupActions.fetchSignup.request, () => ({
    loading: true,
  }))
  .handleAction(Actions.signupActions.fetchSignup.success, (state, { payload }) => ({
    ...state,
    error: payload ? 'SUCCESS' : 'FAIL',
    loading: false,
  }))
  .handleAction(Actions.signupActions.fetchSignup.failure, (state, { payload }) => ({
    ...state,
    error: '',
    loading: false,
    message: payload.message,
  }));

export default signupReducer;
