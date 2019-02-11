const initState = {
    test: null
}

const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DATA_ADDED':
        return {
            ...state
        }
        case 'FAILED_TO_ADD':
        return {
            ...state
        }
        default:
        return state;
    }
}

export default mapReducer
