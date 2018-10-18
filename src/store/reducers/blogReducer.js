const initState = {

};

const blogReducer = (state=initState,action) => {
    switch (action.type) {
        case 'ADD_BLOG_SUCCES':
            console.log('Blog Added Firestore correctly, Thats blog:',action.Blog)
            return state;
        case 'ADD_BLOG_ERROR':
            console.log('Create blog is failded that error:',action.error)
            return state;
        default:
            return state;
           
    }
}
export default blogReducer;