const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UNSECCESFUL_LOGIN':
            console.log('failed')
        return {
            ...state,
            authError: 'login failed'

        }
        case 'LOGIN_SUCCESS':
        console.log('login succes')
        return {
            ...state,
            authError: null
        }
        default:
        return state;
    }
}

export default authReducer
