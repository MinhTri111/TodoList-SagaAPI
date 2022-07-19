import * as Types from './todos.type';

export const fetchRequest = (params) => ({ type: Types.FETCH_REQUEST, params });
export const fetchSuccess = (payload) => ({ type: Types.FETCH_SUCCESS, payload });
export const fetchFailure = (error) => ({ type: Types.FETCH_FAILURE, error });

export const addRequest = (params, callback) => ({ type: Types.ADD_REQUEST, params, callback });
export const addSuccess = (payload) => ({ type: Types.ADD_SUCCESS, payload: payload });
export const addError = (error) => ({ type: Types.ADD_ERROR, error });

export const updateRequest = (params, callback) => ({ type: Types.UPDATE_REQUEST, params, callback });
export const updateSuccess = (data) => ({ type: Types.UPDATE_SUCCESS, payload: data });
export const updateError = (error) => ({ type: Types.UPDATE_ERROR, error });

export const completedRequest = (params, callback) => ({ type: Types.COMPLETED_REQUEST, params, callback });
export const completedSuccess = (data) => ({ type: Types.COMPLETED_SUCCESS, payload: data });
export const completedError = (error) => ({ type: Types.COMPLETED_ERROR, error });

export const deleteRequest = (params, callback) => ({ type: Types.DELETE_REQUEST, params, callback });
export const deleteSuccess = (id) => ({ type: Types.DELETE_SUCCESS, payload: id });
export const deleteError = (error) => ({ type: Types.DELETE_ERROR, error });
