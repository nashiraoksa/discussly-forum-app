import PropTypes from 'prop-types';
import React from 'react';

export default function LeaderboardItem({ avatar, name, score }) {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-2'>
        <img src={avatar} alt='' className='w-7 h-7 rounded-full bg-slate-300' />
        <span>{name}</span>
      </div>
      <span>{score}</span>
    </div>
  );
}

LeaderboardItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
