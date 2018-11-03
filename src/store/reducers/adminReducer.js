const initState = {
    adminError: null,
    isAdmin: false
}
const adminReducer = (state=initState, actions) => {
    switch (actions.type) {
        case 'ADMIN_LOGIN':
            //console.log('Succes')
            //console.log(state)
            return({...state,isAdmin:true})
        case 'ADMIN_LOGIN_ERROR':
            //console.log('failded')
            return({...state,isAdmin:false,adminError:actions.payload.err})
        case 'NOT_ADMIN_LOGIN':
            //console.log('failded')
            return({...state,isAdmin:false})
        default:
            //console.log('default')
            return(state)
    }
}
export default adminReducer;