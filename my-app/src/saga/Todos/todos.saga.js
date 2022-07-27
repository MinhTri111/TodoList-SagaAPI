import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './todos.type';
import * as Action from './todos.action';
import API from './todos.api';

function* fetchSaga({ params }) {
    try {
        const res = yield call(API.fetch, params);
        if (res) {
            yield put(Action.fetchSuccess(res.data.data.items));
        }
    } catch (error) {
        yield put(Action.fetchFailure(error));
        console.log(error);
    }
}

function* addSaga({ params, token, callback }) {
    try {
        const res = yield call(API.add, JSON.parse(token), params);
        if (res) {
            yield put(Action.addSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.addError(error));
        console.log(error);
    }
}

function* updateSaga({ params, token, callback }) {
    try {
        const res = yield call(API.update, JSON.parse(token), params);
        if (res) {
            yield put(Action.updateSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.updateError(error));
        console.log(error);
    }
}
function* deleteSaga({ params, token, data, callback, callback1 }) {
    console.log(data);
    try {
        const res = yield call(API.delete, JSON.parse(token), params, data);
        if (res) {
            yield put(Action.deleteSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.deleteError(error));
        console.log(error);
        callback1();
    }
}
function* completedSaga({ params, callback }) {
    try {
        const res = yield call(API.update, params);
        if (res) {
            yield put(Action.completedSuccess(params));
            if (params.completed === true) {
                callback();
            }
            yield put(Action.fetchRequest('fetchRequest'));
        }
    } catch (error) {
        yield put(Action.completedError(error));
        console.log(error);
    }
}

export function* todosSaga() {
    yield takeEvery(Types.FETCH_REQUEST, fetchSaga);
    yield takeEvery(Types.ADD_REQUEST, addSaga);
    yield takeEvery(Types.UPDATE_REQUEST, updateSaga);
    yield takeEvery(Types.DELETE_REQUEST, deleteSaga);
    yield takeEvery(Types.COMPLETED_REQUEST, completedSaga);
}
