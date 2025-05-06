import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function asyncPopulateUsersThreadsLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboards = await api.getAllLeaderboards();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersThreadsLeaderboards };
