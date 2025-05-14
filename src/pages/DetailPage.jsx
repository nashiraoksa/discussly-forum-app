import React, { useEffect } from 'react';
import CardGeneral from '../components/general/CardGeneral';
import ThreadDetail from '../components/thread/ThreadDetail';
import CommentInput from '../components/comment/CommentInput';
import CommentList from '../components/comment/CommentList';
import { useNavigate, useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeThreadDetail,
} from '../states/threadDetail/action';
import { asyncAddComment } from '../states/comments/action';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeComment,
} from '../states/threadDetail/action';

export default function DetailPage() {
  const navigate = useNavigate();
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

  const onCommentThread = (comment) => {
    dispatch(asyncAddComment({ content: comment, threadId: id }));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment({ threadId: threadDetail?.id, commentId }));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment({ threadId: threadDetail?.id, commentId }));
  };

  const onNeutralizeComment = (commentId) => {
    dispatch(asyncNeutralizeComment({ threadId: threadDetail?.id, commentId }));
  };

  const isCommentUpvoted = (upVotesBy) => upVotesBy.includes(authUser?.id);
  const isCommentDownvoted = (downVotesBy) => downVotesBy.includes(authUser?.id);

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
          {authUser?.id ? (
            <CommentInput createComment={onCommentThread} />
          ) : (
            <div className='w-full h-24 flex justify-center items-center text-gray-500 underline'>
              <p onClick={() => navigate('/login')} className='cursor-pointer'>
                Please login to write a comment.
              </p>
            </div>
          )}
          <CommentList
            comments={threadDetail.comments}
            onUpVoteComment={onUpVoteComment}
            onDownVoteComment={onDownVoteComment}
            onNeutralizeComment={onNeutralizeComment}
            isCommentUpvoted={isCommentUpvoted}
            isCommentDownvoted={isCommentDownvoted}
          />
        </div>
      </CardGeneral>
    </div>
  );
}
