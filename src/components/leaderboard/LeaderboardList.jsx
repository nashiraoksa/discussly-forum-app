import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import PropTypes from 'prop-types';

export default function LeaderboardList({ leaderboards }) {
  return (
    <div className='w-full flex flex-col gap-6'>
      {leaderboards.map((item) => {
        return (
          <LeaderboardItem
            key={item.user.id}
            avatar={item.user.avatar}
            name={item.user.name}
            score={item.score}
          />
        );
      })}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.array.isRequired,
};
