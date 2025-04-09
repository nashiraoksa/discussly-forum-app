import React from 'react';
import CardGeneral from '../general/CardGeneral';

export default function TopThreadList() {
  // data dummy
  const threads = [
    {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, in non possimus similique perspiciatis pariatur dolorem obcaecati quaerat eius ipsa quis numquam blanditiis unde, cupiditate eaque recusandae corporis amet doloremque veritatis vero voluptatum laboriosam? Minima, alias? Earum officiis a sequi!',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: ['user-1', 'user-2'],
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
      upVotesBy: ['user-3'],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-3',
      title: 'Thread Ketiga',
      body: 'Ini adalah thread ketiga',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-3',
      upVotesBy: ['user-4', 'user-5', 'user-6'],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-4',
      title: 'Thread Keempat',
      body: 'Ini adalah thread keempat',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-4',
      upVotesBy: ['user-7', 'user-8'],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-5',
      title: 'Thread Kelima',
      body: 'Ini adalah thread kelima',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-5',
      upVotesBy: ['user-9'],
      downVotesBy: [],
      totalComments: 0,
    },
  ];

  const topThreads = threads.sort((a, b) => b.upVotesBy.length - a.upVotesBy.length).slice(0, 3);

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
                <h4 className='text-md text-[#373F51] font-semibold'>{thread.title}</h4>
                <p className='h-6 text-sm text-[#838a99] truncate'>{thread.body}</p>
              </div>
              <div className='text-sm flex justify-between'>
                <span className='text-[#838a99] font-medium'>
                  {thread.upVotesBy.length} people voted
                </span>
                <span className='cursor-pointer font-semibold text-[#58A4B0]'>
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
