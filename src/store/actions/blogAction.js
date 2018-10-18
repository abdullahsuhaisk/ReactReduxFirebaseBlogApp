export const blogAdd = (Blog) => {
    //Uyarı bilgisi ver
    return(dispatch, getstate, {getFirebase, getFirestore}) => {
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
