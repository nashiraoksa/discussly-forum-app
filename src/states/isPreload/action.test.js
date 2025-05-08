import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { setAuthUserActionCreator } from '../authUser/action';
import { setIsPreloadActionCreator, asyncPreloadProcess } from './action';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const fakeAuthUser = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = vi.fn();
    vi.spyOn(api, 'getOwnProfile');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when getOwnProfile succeeds', async () => {
    // arrange
    api.getOwnProfile.mockResolvedValue(fakeAuthUser);

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.getOwnProfile).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should log error, dispatch null authUser, and continue preload when getOwnProfile fails', async () => {
    // arrange
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    api.getOwnProfile.mockRejectedValue(fakeErrorResponse);

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.getOwnProfile).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('Ups, something went wrong');
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());

    consoleSpy.mockRestore();
  });
});
