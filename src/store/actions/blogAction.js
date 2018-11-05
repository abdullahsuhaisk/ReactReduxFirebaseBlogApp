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
export const BlogUpdateStart = (BlogId) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore(); //involked firestore
        firestore.collection('Blog').doc(BlogId).get().then((doc)=>{
            dispatch({type:'BLOG_UPDATE_START',payload:doc.data(),BlogId})
        })
    }
}
export const BlogUpdate = (Blog) => {
    return(dispatch,getState,{getFirebase,getFirestore})=> {
        const firestore = getFirestore(); //involke firestore
        firestore.collection('Blog').doc(Blog.id).update(Blog).then(()=>{
            dispatch({type:'BLOG_UPDATE_SUCCES'})
        }).catch(err=>{
            dispatch({type:'BLOG_UPDATE_FAILDED',payload:err})
        })
    }
}
export const cancelUpdateBlog = () => {
    return(dispatch) => {
        dispatch({type:'BLOG_UPDATE_CANCEL'})
    }
}