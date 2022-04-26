import PostList from '@src/components/molecules/PostList';
import { useDispatch, useSelector } from '@src/Redux';
import React, { useEffect } from 'react';
import Actions from '../../Redux/src/actions';

const Board = () => {
  const posts = useSelector((state) => state.postReducer.posts) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.postActions.fetchPosts.request({ page: 1 }));
  }, [dispatch]);

  return (
    <PostList
      posts={posts}
    />
  );
};

export default Board;
