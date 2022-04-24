import { createAsyncAction } from 'typesafe-actions';

export const fetchLogin = createAsyncAction(
  '@@LOGIN/FETCH_REQUEST',
  '@@LOGIN/FETCH_SUCCESS',
  '@@LOGIN/FETCH_FAILURE',
)<LoginRequestBody, boolean, number>();

export default {
  fetchLogin,
};
