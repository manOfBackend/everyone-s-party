import { useDispatch } from '@src/Redux';
import React from 'react';
import { Actions } from '../../Redux';

const Board = () => {
  const a = '안녕 리dd액트?';
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(Actions.postActions.fetchPosts.request({ page: 1 }));
        }}
      >
        눌러보세요.

      </button>
    </div>
  );
};

export default Board;
