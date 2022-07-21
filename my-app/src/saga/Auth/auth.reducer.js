import * as Types from './auth.type';
const initState = {
    account: {},
    isLogin: false,
    isRegisterSuccess: false,
    loading: false,
    error: null,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case Types.REGISTER_SUCCESS:
            return {
                ...state,
                account: action.payload,
                isRegisterSuccess: true,
                loading: false,
            };
        case Types.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                isRegisterSuccess: false,
                error: action.error,
            };
        default:
            return state;
    }
};
export default authReducer;
