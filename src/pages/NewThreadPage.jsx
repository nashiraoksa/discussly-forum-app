import React from 'react';
import ThreadInput from '../components/thread/ThreadInput';
import CardGeneral from '../components/general/CardGeneral';
import { asyncAddThread } from '../states/threads/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <h2 className='text-2xl text-[#373F51] font-bold'>Create New Discussion</h2>
        <ThreadInput createThread={onAddThread} />
      </CardGeneral>
    </div>
  );
}
