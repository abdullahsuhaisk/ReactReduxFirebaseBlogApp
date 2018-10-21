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

export const logOn = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            console.log(response);
            firestore.collection('users').doc(response.user.uid).set({
                name:newUser.name,
                email:newUser.email,
                interest:newUser.interest
            })
        }).then(()=>{
            dispatch({type:'LOGON_SUCCESS'})
        }).catch((err)=> {
            dispatch({type:'LOGON_ERROR',err})
        })
    }
}