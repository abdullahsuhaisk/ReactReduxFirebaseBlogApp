import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    firestore:firestoreReducer,
    admin:adminReducer
})

export default rootReducer;