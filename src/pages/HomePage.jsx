import React from 'react';
import ThreadList from '../components/thread/ThreadList';
import TopThreadList from '../components/thread/TopThreadList';
import PopularTags from '../components/thread/PopularTags';

export default function HomePage() {
  return (
    <div className='w-full h-full flex pt-12 pb-12 px-40 gap-4'>
      <div className='w-3/4 h-auto max-h-screen overflow-y-auto'>
        <ThreadList />
      </div>
      <div className='w-1/4 h-screen flex flex-col gap-2'>
        <TopThreadList />
        <PopularTags />
      </div>
    </div>
  );
}
