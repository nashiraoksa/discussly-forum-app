import React from 'react';
import ThreadInput from '../components/thread/ThreadInput';
import CardGeneral from '../components/general/CardGeneral';

export default function NewThreadPage() {
  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <h2 className='text-2xl text-[#373F51] font-bold'>Create New Discussion</h2>
        {/* <LoginInput login={onLogin} /> */}
        <ThreadInput />
      </CardGeneral>
    </div>
  );
}
