import React from 'react';
import LeaderboardItem from './LeaderboardItem';

export default function LeaderboardList() {
  const leaderboard = [
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
    { user: { name: 'user-1', avatar: 'https://generated-image-url.jpg' }, score: 10 },
  ];

  return (
    <div className='w-full flex flex-col gap-6'>
      {leaderboard.map((item) => {
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
