import api from '../../utils/api';
import { addCommentThreadDetailActionCreator } from '../threadDetail/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveCommentsActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENTS,
    payload: {
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

function asyncAddComment({ content, threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment({ content, threadId });

      dispatch(addCommentThreadDetailActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveCommentsActionCreator, addCommentActionCreator, asyncAddComment };
