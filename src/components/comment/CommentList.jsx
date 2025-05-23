import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import parser from 'html-react-parser';
import { postedAt } from '../../utils';
import PropTypes from 'prop-types';

export default function CommentList({
  comments,
  onUpVoteComment,
  onDownVoteComment,
  onNeutralizeComment,
  isCommentUpvoted,
  isCommentDownvoted,
}) {
  const handleUpVote = (comment) => {
    if (isCommentUpvoted(comment.upVotesBy)) {
      onNeutralizeComment(comment.id);
    } else {
      onUpVoteComment(comment.id);
    }
  };

  const handleDownVote = (comment) => {
    if (isCommentDownvoted(comment.downVotesBy)) {
      onNeutralizeComment(comment.id);
    } else {
      onDownVoteComment(comment.id);
    }
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <h5 className='text-xl text-[#373F51] font-bold'>Comments ({comments.length})</h5>
      <div className='w-full flex flex-col gap-4'>
        {comments.length === 0 && (
          <div className='w-full h-24 flex justify-center items-center text-gray-500 underline'>
            <p>No comment yet.</p>
          </div>
        )}
        {comments.map((comment) => {
          return (
            <div key={comment.id} className='w-full flex flex-col gap-3 border-b pb-5 px-2'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <img
                    src={comment.owner.avatar}
                    alt=''
                    className='w-6 h-6 rounded-full bg-slate-300'
                  />
                  <span className='text-sm'>{comment.owner.name}</span>
                </div>
                <span className='text-xs text-slate-400'>{postedAt(comment.createdAt)}</span>
              </div>
              <div>{parser(comment.content)}</div>
              <div className='w-full flex gap-2 justify-end text-sm'>
                <div className='flex items-center gap-1'>
                  <span className='cursor-pointer' onClick={() => handleUpVote(comment)}>
                    {isCommentUpvoted(comment.upVotesBy) ? <FaThumbsUp /> : <FaRegThumbsUp />}
                  </span>
                  <span>{comment.upVotesBy.length}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='cursor-pointer' onClick={() => handleDownVote(comment)}>
                    {isCommentDownvoted(comment.downVotesBy) ? (
                      <FaThumbsDown />
                    ) : (
                      <FaRegThumbsDown />
                    )}
                  </span>
                  <span>{comment.downVotesBy.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownVoteComment: PropTypes.func.isRequired,
  onNeutralizeComment: PropTypes.func.isRequired,
  isCommentUpvoted: PropTypes.func.isRequired,
  isCommentDownvoted: PropTypes.func.isRequired,
};
