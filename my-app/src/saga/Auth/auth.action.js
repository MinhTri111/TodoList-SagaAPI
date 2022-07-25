import * as Types from './auth.type';

export const registerRequest = (params, callback, callback1) => ({
    type: Types.REGISTER_REQUEST,
    params,
    callback,
    callback1,
});
export const registerSuccess = (payload) => ({ type: Types.REGISTER_SUCCESS, payload });
export const registerFailure = (error) => ({ type: Types.REGISTER_ERROR, error });

export const loginRequest = (params, callback, callback1) => ({
    type: Types.LOGIN_REQUEST,
    params,
    callback,
    callback1,
});
export const loginSuccess = () => ({ type: Types.LOGIN_SUCCESS });
export const loginFailure = (error) => ({ type: Types.LOGIN_ERROR, error });

export const logoutRequest = () => ({ type: Types.LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: Types.LOGOUT_SUCCESS });
export const logoutFailure = (error) => ({ type: Types.LOGOUT_ERROR, error });
