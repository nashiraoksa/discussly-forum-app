import PropTypes from 'prop-types';
import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../../utils';
import parser from 'html-react-parser';

export default function ThreadItem({
  id,
  user,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  onUpVoteThread,
  onDownVoteThread,
  onNeutralizeThread,
  isUpvoted,
  isDownvoted,
}) {
  const navigate = useNavigate();

  const handleUpVote = (threadId) => {
    if (isUpvoted(upVotesBy)) {
      onNeutralizeThread(threadId);
    } else {
      onUpVoteThread(threadId);
    }
  };

  const handleDownVote = (threadId) => {
    if (isDownvoted(downVotesBy)) {
      onNeutralizeThread(threadId);
    } else {
      onDownVoteThread(threadId);
    }
  };

  return (
    <div className='w-full h-full flex flex-col border-b border-b-[#A9BCD0] border-opacity-70 py-4 gap-1'>
      <header className='w-full flex flex-col gap-2'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <img src={user.avatar} alt='avatar' className='w-5 h-5 rounded-full bg-slate-300' />
            <span className='text-xs'>{user.name}</span>
          </div>
          <span className='text-xs text-slate-400'>{postedAt(createdAt)}</span>
        </div>
        <div>
          <h3
            className='text-lg text-[#373F51] font-semibold cursor-pointer'
            onClick={() => navigate(`/thread/${id}`)}
          >
            {title}
          </h3>
        </div>
      </header>
      <div className='flex flex-col gap-2'>
        <div className='max-h-16 text-sm text-gray-500 text-wrap overflow-hidden'>
          <div className='w-full line-clamp-3'>{parser(body)}</div>
        </div>
        <div className='w-full mt-2 flex gap-2 justify-between items-center'>
          <div className='w-fit flex gap-2 items-center'>
            <span className='text-xs bg-[#D8DBE2] text-[#373F51] py-1 px-3 rounded-full'>
              {category}
            </span>
            <span
              className='text-sm font-semibold cursor-pointer text-[#58A4B0]'
              onClick={() => navigate(`/thread/${id}`)}
            >
              See details {'>'}
            </span>
          </div>
          <div className='text-sm flex gap-2 items-center'>
            <div className='flex gap-2'>
              <div className='flex items-center gap-1'>
                <span className='cursor-pointer' onClick={() => handleUpVote(id)}>
                  {isUpvoted(upVotesBy) ? <FaThumbsUp /> : <FaRegThumbsUp />}
                </span>
                <span>{upVotesBy.length}</span>
              </div>
              <div className='flex items-center gap-1'>
                <span className='cursor-pointer' onClick={() => handleDownVote(id)}>
                  {isDownvoted(downVotesBy) ? <FaThumbsDown /> : <FaRegThumbsDown />}
                </span>
                <span>{downVotesBy.length}</span>
              </div>
            </div>
            <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
            <div>{totalComments} replies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
  onNeutralizeThread: PropTypes.func.isRequired,
  isUpvoted: PropTypes.func.isRequired,
  isDownvoted: PropTypes.func.isRequired,
};
