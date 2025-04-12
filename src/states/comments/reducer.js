import { ActionType } from './action';

function commentReducer(comments = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [action.payload.comment, ...comments];
    case ActionType.UPVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : comment.upVotesBy.concat([action.payload.userId]),
          };
        }
        return comment;
      });
    case ActionType.NEUTRALIZE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            upVotesBy:
              comment.upVotesBy.includes(action.payload.userId) &&
              comment.downVotesBy.filter((id) => id !== action.payload.userId),
            downVotesBy:
              comment.upVotesBy.includes(action.payload.userId) &&
              comment.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return comment;
      });
    case ActionType.DOWNVOTE_COMMENT:
      return comments.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter((id) => id !== action.payload.userId)
              : comment.downVotesBy.concat([action.payload.userId]),
          };
        }
        return comment;
      });
    default:
      return comments;
  }
}

export default commentReducer;
