export const blogAdd = (Blog) => {
    //Uyarı bilgisi ver
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('Blog').add({
            ...Blog,
            author:'A.Süha Işık'
        }).then(()=> {
            dispatch({type:'ADD_BLOG_SUCCES',Blog})
        }).catch((err)=>
        {
            dispatch({type:'ADD_BLOG_ERROR',err})
        })
    }
}
export const AddComment = (newComment) => {
    return(dispatch,getState, {getFirebase, getFirestore})=> {
        const userId = getState().firebase.auth.uid;
        const userName = getState().firebase.profile.name;
        const userEmail = getState().firebase.profile.email;
        const firestore = getFirestore();
        firestore.collection('Comments').add({
            ...newComment,
            userId:userId,
            userName: userName,
            userEmail: userEmail
        }).then(()=>{
            dispatch({type:'ADD_COMMENT_SUCCESS'})
        }).catch((err)=> {
            dispatch({type:'ADD_COMMENT_ERROR',err})
        })
    }
}