const initState = {
    //Add comment error statement
    title:'',
    category:'',
    content:'',
    date: new Date(),
    metatag:'',
    id:'',
    update:0,
    categories:[]
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
        case 'BLOG_UPDATE_START':
            console.log(action)
            return({
                ...state,
                isAdmin:false,
                title:action.payload.title,
                category:action.payload.category,
                content:action.payload.content,
                metatag:action.payload.metatag,
                id:action.BlogId,
                update:1
            })
        case 'BLOG_UPDATE_SUCCES':
            console.log('Update success');
            return({
                ...state,
                update:0
            })
        case 'BLOG_UPDATE_FAILDED':
            return({
                ...state,
                update:0
            })
        case 'BLOG_UPDATE_CANCEL':
            return({
                ...state,
                update:0
            })
        case 'GET_CATEGORY':
            return({
                ...state,
                categories: [...state.categories, action.payload.name] 
                // ? come double category
            })
        default:
            return state;
    }
}
export default blogReducer;