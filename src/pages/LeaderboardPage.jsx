import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import LeaderboardList from '../components/leaderboard/LeaderboardList';
import { useSelector } from 'react-redux';

export default function LeaderboardPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <header className='w-full text-center flex flex-col items-center'>
          <h2 className='w-3/4 text-2xl text-[#373F51] font-bold pb-5 border-b'>
            Leaderboard - Most Active Users
          </h2>
          <div className='w-full flex justify-between py-4 text-lg font-semibold text-[#373F51]'>
            <h3>User</h3>
            <h3>Score</h3>
          </div>
        </header>
        <LeaderboardList leaderboards={leaderboards} />
      </CardGeneral>
    </div>
  );
}
