export const signIn = ( credetials ) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase= getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credetials.email,
            credetials.password).then(()=>{
                dispatch({type:'LOGIN_SUCCES'})
            }).catch((err)=>{dispatch({type:'LOGIN_ERROR',err})})
        }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase= getFirebase();
        firebase.auth().signOut().then(()=> {
            dispatch({type:'SIGNOUT_SUCCES'})
        }).catch((err)=>{
            dispatch({type:'SIGNOUT_ERROR',err})
        })
    }
}