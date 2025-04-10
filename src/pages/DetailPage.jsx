import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import ThreadDetail from '../components/thread/ThreadDetail';
import CommentInput from '../components/comment/CommentInput';
import CommentList from '../components/comment/CommentList';

export default function DetailPage() {
  const detailThread = {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate sunt commodi quis eius animi dolorem consequuntur earum asperiores doloremque, hic quas odit. At ipsam magnam officiis doloremque molestiae eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate sunt commodi quis eius animi dolorem consequuntur earum asperiores doloremque, hic quas odit. At ipsam magnam officiis doloremque molestiae eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cupiditate sunt commodi quis eius animi dolorem consequuntur earum asperiores doloremque, hic quas odit. At ipsam magnam officiis doloremque molestiae eveniet! ',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  };

  return (
    // <div>
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      {/* TODO: props detail object spread params */}
      <CardGeneral>
        <div className='w-full flex flex-col gap-6'>
          {/* talk detail */}
          <ThreadDetail
            id={detailThread.id}
            title={detailThread.title}
            body={detailThread.body}
            category={detailThread.category}
            createdAt={detailThread.createdAt}
            username={detailThread.owner.name}
            avatar={detailThread.owner.avatar}
            upVotesBy={detailThread.upVotesBy}
            downVotesBy={detailThread.downVotesBy}
          />
          {/* TODO: render reply comment input only if authUser exist */}
          {/* <div> */}
          {/* comment section */}
          <CommentInput />
          <CommentList />
          {/* </div> */}
        </div>
      </CardGeneral>
    </div>
  );
}
