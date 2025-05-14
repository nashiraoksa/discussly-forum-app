import React from 'react';
import CardGeneral from '../general/CardGeneral';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ThreadItem from './ThreadItem';
import PropTypes from 'prop-types';

export default function ThreadList({
  threads,
  authUser,
  onUpVoteThread,
  onDownVoteThread,
  onNeutralizeThread,
  isUpvoted,
  isDownvoted,
}) {
  const navigate = useNavigate();

  const onClickAddNewThread = () => {
    navigate('/new');
  };

  return (
    <CardGeneral>
      <div className='w-full pb-5 px-2 border-b border-b-[#A9BCD0] border-opacity-70 flex justify-between'>
        <h2 className='text-2xl text-[#373F51] font-bold'>Discussions</h2>
        <button
          className='w-[35px] h-[35px] bg-[#373F51] text-white text-xs flex justify-center items-center rounded-full hover:bg-[#D8DBE2] hover:text-[#373F51] disabled:bg-gray-200 disabled:text-gray-400'
          disabled={authUser?.id ? false : true}
          onClick={onClickAddNewThread}
        >
          <FaPencilAlt />
        </button>
      </div>
      <div className='w-full h-auto'>
        {threads?.map((thread) => {
          return (
            <ThreadItem
              key={thread.id}
              {...thread}
              onUpVoteThread={onUpVoteThread}
              onDownVoteThread={onDownVoteThread}
              onNeutralizeThread={onNeutralizeThread}
              isUpvoted={isUpvoted}
              isDownvoted={isDownvoted}
            />
          );
        })}
      </div>
    </CardGeneral>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
  authUser: PropTypes.object.isRequired,
  onUpVoteThread: PropTypes.func.isRequired,
  onDownVoteThread: PropTypes.func.isRequired,
  onNeutralizeThread: PropTypes.func.isRequired,
  isUpvoted: PropTypes.func.isRequired,
  isDownvoted: PropTypes.func.isRequired,
};
