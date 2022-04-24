import Post from '@src/components/atoms/Post';
import { useDispatch, useSelector } from '@src/Redux';
import React, { useEffect } from 'react';
import Actions from '../../Redux/src/actions';

const Board = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.postActions.fetchPosts.request({ page: 1 }));
  }, [dispatch]);

  return (
    <div className="block">
      <div className="relative mt-0 py-5 px-4 rounded-lg">
        <ul className="-my-2">
          {
            posts?.map((post) => (
              <Post
                key={post.newsId}
                imageUrl={post.imageUrl}
                title={post.title}
                summary={post.summary}
                regDt={post.regDt}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Board;
