import React, { useEffect } from 'react';
import ThreadList from '../components/thread/ThreadList';
import TopThreadList from '../components/thread/TopThreadList';
import PopularTags from '../components/thread/PopularTags';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersThreadsLeaderboards } from '../states/shared/action';
import { asyncSetCategories, toggleSelectCategoryActionCreator } from '../states/categories/action';
import {
  asyncDownVoteThread,
  asyncNeutralizeThread,
  asyncUpVoteThread,
} from '../states/threads/action';

export default function HomePage() {
  const dispatch = useDispatch();

  const { threads = [], users = [], categories = [], authUser } = useSelector((states) => states);

  const threadList = threads?.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  const getFilteredThreads = (threads, categories) => {
    const selectedCategory = categories?.find((cat) => cat.selected);

    if (!selectedCategory) {
      return threads;
    }

    return threads?.filter(
      (thread) =>
        thread.category.toLowerCase().trim() === selectedCategory.category.toLowerCase().trim()
    );
  };

  const filteredThreads = getFilteredThreads(threadList, categories);

  const handleCategoryClick = (categoryClicked) => {
    dispatch(toggleSelectCategoryActionCreator(categoryClicked));
  };

  useEffect(() => {
    dispatch(asyncPopulateUsersThreadsLeaderboards());
    dispatch(asyncSetCategories());
  }, [dispatch]);

  const onUpVoteThread = (threadId) => {
    authUser?.id && dispatch(asyncUpVoteThread(threadId, authUser?.id));
  };

  const onDownVoteThread = (threadId) => {
    authUser?.id && dispatch(asyncDownVoteThread(threadId, authUser?.id));
  };

  const onNeutralizeThread = (threadId) => {
    authUser?.id && dispatch(asyncNeutralizeThread(threadId, authUser?.id));
  };

  const isUpvoted = (upVotesBy) => upVotesBy.includes(authUser?.id);
  const isDownvoted = (downVotesBy) => downVotesBy.includes(authUser?.id);

  return (
    <div className='w-full h-full flex pt-12 pb-12 px-40 gap-4'>
      <div className='w-3/4 h-auto max-h-screen overflow-y-auto'>
        <ThreadList
          threads={filteredThreads}
          authUser={authUser}
          onUpVoteThread={onUpVoteThread}
          onDownVoteThread={onDownVoteThread}
          onNeutralizeThread={onNeutralizeThread}
          isUpvoted={isUpvoted}
          isDownvoted={isDownvoted}
        />
      </div>
      <div className='w-1/4 h-screen flex flex-col gap-2'>
        <TopThreadList threads={threads} />
        <PopularTags categories={categories} onCategoryClick={handleCategoryClick} />
      </div>
    </div>
  );
}
