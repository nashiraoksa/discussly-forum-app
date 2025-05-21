/**
 * skenario test
 *
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when login succeeds
 *  - should call alert and dispatch hideLoading when login fails
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncSetAuthUser } from './action';
import { setAuthUserActionCreator } from './action';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const fakeAuthUser = {
  id: 'user-123',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeToken = 'fake-token';

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncRegisterUser thunk', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = vi.fn();

    vi.spyOn(api, 'login');
    vi.spyOn(api, 'putAccessToken');
    vi.spyOn(api, 'getOwnProfile');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should dispatch action correctly when login succeeds', async () => {
    // arrange
    api.login.mockResolvedValue(fakeToken);
    api.putAccessToken.mockImplementation(() => {});
    api.getOwnProfile.mockResolvedValue(fakeAuthUser);

    // action
    await asyncSetAuthUser({ email: 'john@example.com', password: 'password' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(api.login).toHaveBeenCalledWith({ email: 'john@example.com', password: 'password' });
    expect(api.putAccessToken).toHaveBeenCalledWith(fakeToken);
    expect(api.getOwnProfile).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should call alert and dispatch hideLoading when login fails', async () => {
    // arrange
    window.alert = vi.fn();
    api.login.mockRejectedValue(fakeErrorResponse);

    // action
    await asyncSetAuthUser({ email: 'john@example.com', password: 'wrongpassword' })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith('Ups, something went wrong');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
