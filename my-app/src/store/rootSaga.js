import { all } from 'redux-saga/effects';
import { todosSaga } from '../saga/Todos/todos.saga';

export default function* rootSaga() {
    yield all([todosSaga()]);
}
