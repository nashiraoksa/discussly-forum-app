import { describe, expect, it } from 'vitest';
import categoriesReducer from './reducer';

describe('categoriesReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = categoriesReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the categories when given by SET_CATEGORIES action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'SET_CATEGORIES',
      payload: {
        categories: [
          {
            category: 'programming',
            selected: false,
          },
          {
            category: 'python',
            selected: false,
          },
        ],
      },
    };

    // action
    const nextState = categoriesReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.categories);
  });

  it('should return the selected category is true when given by TOGGLE_SELECT_CATEGORY action', () => {
    // arrange
    const initialState = [
      {
        category: 'programming',
        selected: false,
      },
    ];

    const action = {
      type: 'TOGGLE_SELECT_CATEGORY',
      payload: {
        category: 'programming',
      },
    };

    // action: select category
    const nextState = categoriesReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        selected: true,
      },
    ]);

    // action: unselect category
    const nextState2 = categoriesReducer(nextState, action);

    // assert
    expect(nextState2).toEqual(initialState);
  });
});
