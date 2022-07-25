import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './auth.type';
import * as Action from './auth.action';
import API from './auth.api';

function* registerSaga({ params, callback, callback1 }) {
    try {
        const check = yield call(API.getUserByAccount, params.account);
        const checkAccount = check.data.findIndex((item) => item.account === params.account);
        if (checkAccount === -1) {
            const res = yield call(API.register, params);
            if (res) {
                yield put(Action.registerSuccess(params));
                callback();
            }
        } else {
            callback1();
            yield put(Action.registerSuccess(params));
        }
    } catch (error) {
        yield put(Action.registerSuccess(error));
        console.log(error);
    }
}

function* loginSaga({ params, callback, callback1 }) {
    try {
        const check = yield call(API.getUserByAccount, params.account);
        const checkAccount = check.data.findIndex(
            (item) => item.account === params.account && item.password === params.password,
        );
        if (checkAccount !== -1) {
            yield put(Action.loginSuccess());
            callback();
            localStorage.setItem(
                'login',
                JSON.stringify({
                    account: check.data[checkAccount].account,
                    name: check.data[checkAccount].name,
                }),
            );
        } else {
            yield put(Action.loginFailure('Wrong account or password!!!'));
            callback1();
        }
    } catch (error) {
        console.log(error);
        yield put(Action.loginFailure(error));
    }
}

function* logoutSaga({ params }) {
    try {
        yield put(Action.logoutSuccess());
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
