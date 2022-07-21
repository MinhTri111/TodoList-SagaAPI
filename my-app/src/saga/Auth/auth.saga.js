import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './auth.type';
import * as Action from './auth.action';
import API from './auth.api';

function* registerSaga({ params, callback }) {
    try {
        const res = yield call(API.register, params);
        if (res) {
            yield put(Action.registerSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.registerSuccess(error));
        console.log(error);
    }
}

// function* loginSaga({ params, callback }) {
//     try {
//         const res = yield call(API.add, params);
//         if (res) {
//             yield put(Action.addSuccess(params));
//             callback();
//             yield put(Action.fetchRequest('fetchRequest'));
//         }
//     } catch (error) {
//         yield put(Action.addError(error));
//         console.log(error);
//     }
// }

export function* authSaga() {
    yield takeEvery(Types.REGISTER_REQUEST, registerSaga);
}
