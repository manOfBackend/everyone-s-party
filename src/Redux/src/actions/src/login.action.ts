import { createAsyncAction } from 'typesafe-actions';

export const fetchLogin = createAsyncAction(
  '@@LOGIN/LOGIN_REQUEST',
  '@@LOGIN/LOGIN_SUCCESS',
  '@@LOGIN/LOGIN_FAILURE',
)<LoginRequestBody, boolean, number>();

export default {
  fetchLogin,
};
