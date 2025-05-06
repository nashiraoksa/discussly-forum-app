import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  SET_CATEGORIES: 'SET_CATEGORIES',
  TOGGLE_SELECT_CATEGORY: 'TOGGLE_SELECT_CATEGORY',
};

function setCategoriesActionCreator(categories) {
  return {
    type: ActionType.SET_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function toggleSelectCategoryActionCreator(category) {
  return {
    type: ActionType.TOGGLE_SELECT_CATEGORY,
    payload: {
      category,
    },
  };
}

function asyncSetCategories() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threads = await api.getAllThreads();

      const initialCategories = [
        ...new Map(
          [...threads].map((thread) => [
            thread.category,
            { category: thread.category, selected: false },
          ])
        ).values(),
      ];

      dispatch(setCategoriesActionCreator(initialCategories));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setCategoriesActionCreator,
  toggleSelectCategoryActionCreator,
  asyncSetCategories,
};
