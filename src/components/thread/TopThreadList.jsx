import React from 'react';
import CardGeneral from '../general/CardGeneral';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TopThreadList({ threads }) {
  const topThreads = [...threads]
    ?.sort((a, b) => b.upVotesBy.length - a.upVotesBy.length)
    .slice(0, 3);

  const navigate = useNavigate();

  return (
    <CardGeneral>
      <header className='w-full mb-4'>
        <h3 className='text-xl text-[#373F51] font-bold'>Top Thread List 🔥</h3>
      </header>
      <div className='w-full flex flex-col gap-2'>
        {topThreads.map((thread) => {
          return (
            <div key={thread.id} className='flex flex-col gap-1 border-b pb-3 px-1'>
              <div>
                <h4
                  className='text-md text-[#373F51] font-semibold cursor-pointer'
                  onClick={() => navigate(`/thread/${thread.id}`)}
                >
                  {thread.title}
                </h4>
                <p className='h-6 text-sm text-[#838a99] truncate'>{thread.body}</p>
              </div>
              <div className='text-sm flex justify-between'>
                <span className='text-[#838a99] font-medium'>
                  {thread.upVotesBy.length} people voted
                </span>
                <span
                  className='cursor-pointer font-semibold text-[#58A4B0]'
                  onClick={() => navigate(`/thread/${thread.id}`)}
                >
                  see details {'>'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </CardGeneral>
  );
}

TopThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
};
