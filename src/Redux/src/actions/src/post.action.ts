import { createAsyncAction } from 'typesafe-actions';

export const fetchPosts = createAsyncAction(
  '@@POSTS/FETCH_REQUEST',
  '@@POSTS/FETCH_SUCCESS',
  '@@POSTS/FETCH_FAILURE',
)<PostsRequestBody, PostsResponseBody, number>();

export default {
  fetchPosts,
};
