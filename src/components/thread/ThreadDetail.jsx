import PropTypes from 'prop-types';
import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { postedAt } from '../../utils';
import parser from 'html-react-parser';

export default function ThreadDetail({
  authUser,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  onUpVoteThread,
  onDownVoteThread,
}) {
  return (
    <div className='w-full h-full flex flex-col gap-4 border-b pb-5'>
      <header>
        <h3 className='text-2xl text-[#373F51] font-bold'>{title}</h3>
      </header>
      <div className='w-full text-md'>
        <p>{parser(body)}</p>
      </div>
      <footer className='w-full flex justify-between'>
        <div className='flex items-center gap-2'>
          <span className='text-xs bg-[#D8DBE2] text-[#373F51] py-1 px-3 rounded-full'>
            {category}
          </span>
          <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
          <div className='flex items-center gap-2'>
            <img src={owner.avatar} alt='avatar' className='w-5 h-5 rounded-full bg-slate-300' />
            <span className='text-xs'>{owner.name}</span>
          </div>
          <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
          <span className='text-xs text-slate-400'>{postedAt(createdAt)}</span>
        </div>
        <div className='flex gap-2'>
          <div className='flex items-center gap-1'>
            <span className='cursor-pointer' onClick={authUser?.id && onUpVoteThread}>
              {upVotesBy.includes(authUser?.id) ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </span>
            <span>{upVotesBy.length}</span>
          </div>
          <div className='flex items-center gap-1'>
            <span className='cursor-pointer' onClick={authUser?.id && onDownVoteThread}>
              {downVotesBy.includes(authUser?.id) ? <FaThumbsDown /> : <FaRegThumbsDown />}
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
  owner: PropTypes.object.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
};
