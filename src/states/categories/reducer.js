import { ActionType } from './action';

function categoriesReducer(categories = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_CATEGORIES:
      return action.payload.categories;
    case ActionType.TOGGLE_SELECT_CATEGORY: {
      const isAlreadySelected = categories.find(
        (cat) => cat.category === action.payload.category && cat.selected
      );

      if (isAlreadySelected) {
        return categories.map((cat) => ({ ...cat, selected: false }));
      }

      return categories.map((cat) => ({
        ...cat,
        selected: cat.category === action.payload.category,
      }));
    }
    default:
      return categories;
  }
}

export default categoriesReducer;
