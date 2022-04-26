import Post from '@components/atoms/Post';
import React from 'react';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => (
  <div className="block">
    <div className="relative mt-0 py-5 px-4 rounded-lg">
      <ul className="-my-2">
        {posts?.map((post) => (
          <Post
            key={post.newsId}
            imageUrl={post.imageUrl}
            title={post.title}
            summary={post.summary}
            regDt={post.regDt}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default PostList;
