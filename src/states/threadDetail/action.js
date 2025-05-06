import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UPVOTE_THREAD_DETAIL: 'UPVOTE_THREAD_DETAIL',
  DOWNVOTE_THREAD_DETAIL: 'DOWNVOTE_THREAD_DETAIL',
  NEUTRALIZE_THREAD_DETAIL: 'NEUTRALIZE_THREAD_DETAIL',
  ADD_COMMENT_THREAD_DETAIL: 'ADD_COMMENT_THREAD_DETAIL',
  UPVOTE_COMMENT_THREAD_DETAIL: 'UPVOTE_COMMENT_THREAD_DETAIL',
  DOWNVOTE_COMMENT_THREAD_DETAIL: 'DOWNVOTE_COMMENT_THREAD_DETAIL',
  NEUTRALIZE_COMMENT_THREAD_DETAIL: 'NEUTRALIZE_COMMENT_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UPVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWNVOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function neutralizeThreadDetailActionCreator(userId) {
  return {
    type: ActionType.NEUTRALIZE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentThreadDetailActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT_THREAD_DETAIL,
    payload: {
      comment,
    },
  };
}

function upVoteCommentThreadDetailActionCreator(commentId, userId) {
  return {
    type: ActionType.UPVOTE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentThreadDetailActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWNVOTE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeCommentThreadDetailActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRALIZE_COMMENT_THREAD_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downvoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralizeThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(neutralizeThreadDetailActionCreator(authUser.id));

    try {
      await api.neutralizeThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(upVoteCommentThreadDetailActionCreator(commentId, authUser.id));

    try {
      await api.upvoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(downVoteCommentThreadDetailActionCreator(commentId, authUser.id));

    try {
      await api.downvoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralizeComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(neutralizeCommentThreadDetailActionCreator(commentId, authUser.id));

    try {
      await api.neutralizeComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeCommentThreadDetailActionCreator({ commentId, userId: authUser.id }));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeThreadDetailActionCreator,
  addCommentThreadDetailActionCreator,
  upVoteCommentThreadDetailActionCreator,
  downVoteCommentThreadDetailActionCreator,
  neutralizeCommentThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeComment,
};
