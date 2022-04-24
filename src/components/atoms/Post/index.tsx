import React from 'react';

interface PostProps {
  imageUrl: string;
  title: string;
  summary: string;
  regDt: number;
}

const Post = ({
  imageUrl, title, summary, regDt,
}: PostProps) => (
  (
    <li className="list-item list-none">
      <a href={imageUrl} className="block py-4">
        <div className="overflow-hidden float-right relative w-24 h-15 rounded-md ml-5">
          <img src={imageUrl} alt={summary} className="block w-full align-top" />
        </div>
        <div className="overflow-hidden">
          <div className="w-full min-h-min table-fixed">
            <div className="table-cell align-middle">
              <strong className="block overflow-hidden max-h-10 font-normal text-base leading-5">{title}</strong>
              <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-500 mt-1 -mb-1">{new Date(regDt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
);

export default Post;
