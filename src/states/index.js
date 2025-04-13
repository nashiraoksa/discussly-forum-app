import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import commentsReducer from './comments/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import categoriesReducer from './categories/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    comments: commentsReducer,
    leaderboards: leaderboardsReducer,
    categories: categoriesReducer,
  },
});

export default store;
