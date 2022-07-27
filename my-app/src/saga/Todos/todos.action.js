import * as Types from './todos.type';

export const fetchRequest = (params) => ({ type: Types.FETCH_REQUEST, params });
export const fetchSuccess = (payload) => ({ type: Types.FETCH_SUCCESS, payload });
export const fetchFailure = (error) => ({ type: Types.FETCH_FAILURE, error });

export const addRequest = (params, token, callback) => ({ type: Types.ADD_REQUEST, params, token, callback });
export const addSuccess = () => ({ type: Types.ADD_SUCCESS });
export const addError = (error) => ({ type: Types.ADD_ERROR, error });

export const updateRequest = (params, token, callback) => ({ type: Types.UPDATE_REQUEST, params, token, callback });
export const updateSuccess = () => ({ type: Types.UPDATE_SUCCESS });
export const updateError = (error) => ({ type: Types.UPDATE_ERROR, error });

export const completedRequest = (params, callback) => ({ type: Types.COMPLETED_REQUEST, params, callback });
export const completedSuccess = (data) => ({ type: Types.COMPLETED_SUCCESS, payload: data });
export const completedError = (error) => ({ type: Types.COMPLETED_ERROR, error });

export const deleteRequest = (params, token, data, callback, callback1) => ({
    type: Types.DELETE_REQUEST,
    params,
    token,
    data,
    callback,
    callback1,
});
export const deleteSuccess = () => ({ type: Types.DELETE_SUCCESS });
export const deleteError = (error) => ({ type: Types.DELETE_ERROR, error });
