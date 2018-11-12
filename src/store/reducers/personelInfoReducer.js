const initState = {
    about:''
}

const personelInfoReducer = (state=initState,action) => {
switch (action.type) {
    case 'GETABOUT':
    console.log('about:',action.payload)
      return({
          ...state,
          about:action.payload
      })  
    case 'GETABOUT_ERROR':
      console.log(action.payload);
      return({
          state
       })
       case 'UPDATE_ABOUT_SUCCES':
       console.log('About updated');
       return({
           ...state,
           err:action.payload.err
        })
       case 'UPDATE_ABOUT_FAILDED':
       console.log(action.payload.err);
       return({
           ...state,
           err:action.payload.err
        })
    default:
    console.log('xxx')
        return(state);
}
}
export default personelInfoReducer;