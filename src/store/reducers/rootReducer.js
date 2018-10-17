import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    blogs: blogReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    firestore:firestoreReducer
})

export default rootReducer;