const initState = {
    //Add comment error statement
};

const blogReducer = (state=initState,action) => {
    switch (action.type) {
        case 'ADD_BLOG_SUCCES':
            console.log('Blog Added Firestore correctly, Thats blog:',action.Blog)
            return state;
        case 'ADD_BLOG_ERROR':
            console.log('Create blog is failded that error:',action.error)
            return state;
        case 'ADD_COMMENT_SUCCESS':
            console.log(state)
            console.log('Comment Adding successfly completed');
            return state;
        case 'ADD_COMMENT_ERROR':
            console.log('Comment adding failded',action.err)
            return state;
            
        default:
            return state;
           
    }
}
export default blogReducer;