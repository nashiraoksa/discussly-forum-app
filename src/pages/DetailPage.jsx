import React, { useEffect } from 'react';
import CardGeneral from '../components/general/CardGeneral';
import ThreadDetail from '../components/thread/ThreadDetail';
import CommentInput from '../components/comment/CommentInput';
import CommentList from '../components/comment/CommentList';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeThreadDetail,
} from '../states/threadDetail/action';
import { asyncAddComment } from '../states/comments/action';
import { useDispatch, useSelector } from 'react-redux';

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const onUpVoteThread = () => {
    if (threadDetail.upVotesBy.includes(authUser?.id)) {
      dispatch(asyncNeutralizeThreadDetail());
    } else {
      dispatch(asyncUpVoteThreadDetail());
    }
  };

  const onDownVoteThread = () => {
    if (threadDetail.downVotesBy.includes(authUser?.id)) {
      dispatch(asyncNeutralizeThreadDetail());
    } else {
      dispatch(asyncDownVoteThreadDetail());
    }
  };

  const onCommentThread = () => {};

  const onVoteComment = () => {};

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <div className='w-full flex flex-col gap-6'>
          <ThreadDetail
            {...threadDetail}
            authUser={authUser}
            onUpVoteThread={onUpVoteThread}
            onDownVoteThread={onDownVoteThread}
          />
          {/* TODO: render reply comment input only if authUser exist */}
          <CommentInput onCommentThread={onCommentThread} />
          <CommentList onVoteComment={onVoteComment} />
        </div>
      </CardGeneral>
    </div>
  );
}
