import React from 'react';
import CardGeneral from '../general/CardGeneral';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ThreadItem from './ThreadItem';

export default function ThreadList() {
  const authUser = {
    id: 'saj',
  };

  const navigate = useNavigate();

  const onClickAddNewThread = () => {
    navigate('/new');
  };

  // data dummy
  const threads = [
    {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, in non possimus similique perspiciatis pariatur dolorem obcaecati quaerat eius ipsa quis numquam blanditiis unde, cupiditate eaque recusandae corporis amet doloremque veritatis vero voluptatum laboriosam? Minima, corporis amet doloremque veritatis vero voluptatum laboriosam? Minima,  corporis amet doloremque veritatis vero voluptatum laboriosam? Minima, corporis amet doloremque veritatis vero voluptatum laboriosam? Minima, alias? Earum officiis a sequi!',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
  ];

  return (
    <CardGeneral>
      <div className='w-full pb-5 px-2 border-b border-b-[#A9BCD0] border-opacity-70 flex justify-between'>
        <h2 className='text-2xl text-[#373F51] font-bold'>Discussions</h2>
        <button
          className='w-[35px] h-[35px] bg-[#373F51] text-white text-xs flex justify-center items-center rounded-full hover:bg-[#D8DBE2] hover:text-[#373F51] disabled:bg-gray-200 disabled:text-gray-400'
          disabled={authUser.id ? false : true}
          onClick={onClickAddNewThread}
        >
          <FaPencilAlt />
        </button>
      </div>
      <div className='w-full h-full p-0'>
        {threads.map((thread) => {
          return (
            <ThreadItem
              key={thread.id}
              id={thread.id}
              title={thread.title}
              body={thread.body}
              username={thread.ownerId}
              category={thread.category}
              createdAt={thread.createdAt}
              upVotesBy={thread.upVotesBy}
              downVotesBy={thread.downVotesBy}
              totalComments={thread.totalComments}
            />
          );
        })}
      </div>
    </CardGeneral>
  );
}
