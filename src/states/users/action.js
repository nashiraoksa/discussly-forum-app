import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const response = await api.register({ name, email, password });
      if (response) {
        alert('Register successful! Please login to start discussion.');
      }
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
