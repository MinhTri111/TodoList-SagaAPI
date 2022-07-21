import { combineReducers } from 'redux';
import todosReducer from '../saga/Todos/todos.reducer';
import authReducer from '../saga/Auth/auth.reducer';

const rootReducer = () =>
    combineReducers({
        auth: authReducer,
        todos: todosReducer,
    });

export default rootReducer;
