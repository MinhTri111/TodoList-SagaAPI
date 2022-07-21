import * as Types from './auth.type';

export const registerRequest = (params, callback) => ({ type: Types.REGISTER_REQUEST, params, callback });
export const registerSuccess = (payload) => ({ type: Types.REGISTER_SUCCESS, payload });
export const registerFailure = (error) => ({ type: Types.REGISTER_ERROR, error });
