const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UNSECCESFUL_LOGIN':
        return {
            ...state,
            authError: false
        }
        case 'LOGIN_SUCCESS':
        return {
            ...state,
            authError: 'success'
        }
        default:
        return state;
    }
}

export default authReducer
