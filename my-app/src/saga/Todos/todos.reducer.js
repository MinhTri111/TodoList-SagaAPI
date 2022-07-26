import * as Types from './todos.type';
const initState = {
    todoList: [],
    isAddSuccess: false,
    isDeleteSucces: false,
    isUpdateSuccess: false,
    isSetCompletedSuccess: false,
    loading: false,
    error: null,
};

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.FETCH_REQUEST:
            console.log('zo day roi');
            return {
                ...state,
                loading: true,
            };
        case Types.FETCH_SUCCESS:
            console.log('zo day roi loi');
            return {
                ...state,
                todoList: action.payload,
                loading: false,
            };
        case Types.FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case Types.ADD_REQUEST:
            return {
                ...state,
                isAddSuccess: false,
                loading: true,
            };
        case Types.ADD_SUCCESS:
            return {
                ...state,
                isAddSuccess: true,
                loading: false,
            };
        case Types.ADD_ERROR:
            return {
                ...state,
                isAddSuccess: false,
                loading: false,
                error: action.error,
            };
        case Types.UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                isUpdateSuccess: false,
            };
        case Types.UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdateSuccess: true,
            };
        case Types.UPDATE_ERROR:
            return {
                ...state,
                isUpdateSuccess: false,
                error: action.error,
            };

        case Types.COMPLETED_REQUEST:
            return {
                ...state,
                loading: true,
                isSetCompletedSuccess: false,
            };
        case Types.COMPLETED_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdateSuccess: true,
            };
        case Types.COMPLETED_ERROR:
            return {
                ...state,
                loading: false,
                isSetCompletedSuccess: false,
                error: action.error,
            };
        case Types.DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                isDeleteSucces: false,
            };

        case Types.DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleteSucces: true,
            };
        case Types.DELETE_ERROR:
            return {
                ...state,
                loading: false,
                isDeleteSucces: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default todosReducer;
