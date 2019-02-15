const initState = {
    pathNames: [],
    activePath: null,
    coords: []
}

const mapReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ACTIVE_PATH':
        return {
            ...state,
            activePath: action.name
        }
        case 'DATA_ADDED':
        return {
            ...state,
            coords: action.coords,
            pathNames: action.names
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
