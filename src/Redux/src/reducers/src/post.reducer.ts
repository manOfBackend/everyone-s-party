import { ActionType, createReducer } from 'typesafe-actions';
import Actions from '../../actions';

export interface PostStore {
  loading: boolean;
  posts?: Post[];
  error?: string;
}

const initialState: PostStore = {
  loading: false,
};

const postReducer = createReducer<PostStore, ActionType<typeof Actions.postActions>>(initialState)
  .handleAction(Actions.postActions.fetchPosts.request, () => ({
    loading: true,
  }))
  .handleAction(Actions.postActions.fetchPosts.success, (state, { payload }) => ({
    ...state,
    loading: false,
    posts: payload.posts,
  }));

export default postReducer;
