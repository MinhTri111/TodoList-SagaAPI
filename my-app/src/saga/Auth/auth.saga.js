import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './auth.type';
import * as Action from './auth.action';
import API from './auth.api';

function* registerSaga({ params, callback, callback1 }) {
    try {
        const res = yield call(API.register, params);
        if (res) {
            yield put(Action.registerSuccess());
            callback();
        }
    } catch (error) {
        yield put(Action.registerFailure(error.response.data.data.message));
        callback1(error.response.data.data.message);
    }
}

function* loginSaga({ params, callback, callback1 }) {
    try {
        const res = yield call(API.login, params);
        if (res) {
            yield put(Action.loginSuccess());
            localStorage.setItem('token', JSON.stringify(res.data.data.token));
            callback();
        }
    } catch (error) {
        console.log('zpday');
        yield put(Action.loginFailure(error.response.data.data.message));
        callback1(error.response.data.data.message);
    }
}

function* logoutSaga({ params }) {
    try {
        yield put(Action.logoutSuccess());
        localStorage.removeItem('token');
    } catch (error) {
        console.log(error);
        yield put(Action.logoutFailure(error));
    }
}

export function* authSaga() {
    yield takeEvery(Types.REGISTER_REQUEST, registerSaga);
    yield takeEvery(Types.LOGIN_REQUEST, loginSaga);
    yield takeEvery(Types.LOGOUT_REQUEST, logoutSaga);
}
