export const getAbout = () => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirebase().firestore()
        firestore.collection('personelInfo').doc('about').get().then((doc)=>{
            dispatch({type:'GETABOUT',payload:doc.data()})
        }).catch((err)=>dispatch({type:'GETABOUT_ERROR',payload:err}))
    }
    // DO NOT WORKİNG !!! ???
    //it's solved DON'T FORGET WHEN CALL THE METHOD ON COMPONENT this.props....
}

export const updateAbout = (about) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('personelInfo').doc('about').update(about).then(()=>{
            dispatch({type:'UPDATE_ABOUT_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'UPDATE_ABOUT_FAILDED',payload:err})
        })
    }
}