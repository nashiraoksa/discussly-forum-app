import api from '../../utils/api';

const ActionType = {
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT',
  NEUTRALIZE_COMMENT: 'NEUTRALIZE_COMMENT',
};

function receiveCommentsActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENTS,
    paylaoad: {
      comments,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncAddComment({ content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment({ content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upvoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncNeutralizeComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.neutralizeComment(commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downvoteComment(commentId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveCommentsActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  neutralizeCommentActionCreator,
  downVoteCommentActionCreator,
  asyncAddComment,
  asyncUpVoteComment,
  asyncNeutralizeComment,
  asyncDownVoteComment,
};
