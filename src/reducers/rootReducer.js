import authReducer from './authReducer'
import mapReducer from './mapReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
const rootReducer = combineReducers({
    auth: authReducer,
    map: mapReducer,
    firebase: firebaseReducer
});

export default rootReducer
