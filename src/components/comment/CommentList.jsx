import React, { useState } from 'react';
// import CommentItem from './CommentItem';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function CommentList() {
  const comments = [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
    {
      id: 'comment-2',
      content: 'Ini adalah komentar kedua',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
    {
      id: 'comment-3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae amet nisi quae eum nemo dolores aut maiores ipsam eaque rerum?',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ];

  const [isCommentUpVoted, setIsCommentUpVoted] = useState(false);
  const [isCommentDownVoted, setIsCommentDownVoted] = useState(false);

  const handleUpVote = () => {
    setIsCommentUpVoted((prev) => !prev);
  };

  const handleDownVote = () => {
    setIsCommentDownVoted((prev) => !prev);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <h5 className='text-xl text-[#373F51] font-bold'>Comments ({comments.length})</h5>
      <div className='w-full flex flex-col gap-4'>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='w-full flex flex-col gap-3 border-b pb-5 px-2'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <img
                    src={comment.owner.avatar}
                    alt=''
                    className='w-6 h-6 rounded-full bg-slate-300'
                  />
                  <span className='text-sm'>{comment.owner.name}</span>
                </div>
                <span className='text-xs text-slate-400'>{comment.createdAt}</span>
              </div>
              <div>
                <p>{comment.content}</p>
              </div>
              <div className='w-full flex gap-2 justify-end text-sm'>
                <div className='flex items-center gap-1'>
                  <span className='cursor-pointer' onClick={handleUpVote}>
                    {isCommentUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}
                  </span>
                  <span>{comment.upVotesBy.length}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='cursor-pointer' onClick={handleDownVote}>
                    {isCommentDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}
                  </span>
                  <span>{comment.downVotesBy.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
