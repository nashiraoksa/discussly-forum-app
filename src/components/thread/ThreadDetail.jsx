import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function ThreadDetail({
  title,
  body,
  category,
  createdAt,
  avatar,
  username,
  upVotesBy,
  downVotesBy,
}) {
  const [isThreadUpVoted, setIsThreadUpVoted] = useState(false);
  const [isThreadDownVoted, setIsThreadDownVoted] = useState(false);

  const handleUpVote = () => {
    setIsThreadUpVoted((prev) => !prev);
  };

  const handleDownVote = () => {
    setIsThreadDownVoted((prev) => !prev);
  };

  return (
    <div className='w-full h-full flex flex-col gap-4 border-b pb-5'>
      <header>
        <h3 className='text-2xl text-[#373F51] font-bold'>{title}</h3>
      </header>
      <div className='w-full text-md'>
        <p>{body}</p>
      </div>
      <footer className='w-full flex justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-xs bg-[#D8DBE2] text-[#373F51] py-1 px-3 rounded-full'>
            {category}
          </span>
          <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
          <div className='flex items-center gap-2'>
            <img src={avatar} alt='avatar' className='w-5 h-5 rounded-full bg-slate-300' />
            <span className='text-xs'>{username}</span>
          </div>
          <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
          <span className='text-xs text-slate-400'>{createdAt}</span>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <span className='cursor-pointer' onClick={handleUpVote}>
              {isThreadUpVoted ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </span>
            <span>{upVotesBy.length}</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='cursor-pointer' onClick={handleDownVote}>
              {isThreadDownVoted ? <FaThumbsDown /> : <FaRegThumbsDown />}
            </span>
            <span>{downVotesBy.length}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
};
