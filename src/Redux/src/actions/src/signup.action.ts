import { createAsyncAction } from 'typesafe-actions';

export const fetchSignup = createAsyncAction(
  '@@SIGNUP/SIGNUP_REQUEST',
  '@@SIGNUP/SIGNUP_SUCCESS',
  '@@SIGNUP/SIGNUP_FAILURE',
)<SignupRequestBody, SignupResponseBody, RequestValidationError>();

export default {
  fetchSignup,
};
