export const isAdmin = () => {
    return(dispatch,getState,{getFirebase, getFirestore}) => {
        const userId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('admin').where('docUid','==',userId).get().then(()=>{
            dispatch({type:'ADMIN_LOGIN'})
        }).catch((err)=>{
            dispatch({type:'ADMIN_LOGIN_ERROR',payload:err})
        })
        //const firebase = getFirebase();
        // firebase.firestore().collection('admin').where(
        //     'docUid','==',userId
        // ).get().then((doc)=>{
        //     doc.foreach(item=>{
        //         const a=item.data().docUid
        //         if (a === userId)
        //         dispatch({type:'ADMIN_LOGIN',payload:a})
        //     })
        // }).catch(err=>{
        //     dispatch({type:'ADMIN_LOGIN_ERROR'})
        // })
        // const firestore = getFirestore();
        // firestore.collection('users').doc(userId).get().then((doc)=>{
        //     if (doc){
        //         if (doc.data().isAdmin ===true) return (dispatch({type:'ADMIN_LOGIN'}))
        //     }
        // }).then(() =>{
        //     (dispatch({type:'ADMIN_LOGIN'}))
        // }).catch(err=>{
        //     dispatch({type:'ADMIN_LOGIN_ERROR',payload:err})
        // })
    }
    // Thats code snippet doesn't working well first dispatct true after default i didn't solve it
}