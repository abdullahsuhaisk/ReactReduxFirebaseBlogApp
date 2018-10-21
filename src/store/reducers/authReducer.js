const initState = {
    authError:null
}
const authReducer = (state=initState, actions) => {
    switch (actions.type) {
        case 'LOGIN_SUCCES':
        console.log('Login Succes');
            return ({
                ...state, authError:null
            })
        case 'LOGIN_ERROR':
        console.log('Login Error');
            return ({
                ...state,authError:'Login Failded'
            })           
        case 'SIGNOUT_SUCCES':
        console.log('SignOut Succes');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('Signout Error');
                return ({
                    ...state, authError:'SignOut Failded'
                })
        case 'LOGON_SUCCESS':
                console.log('Login Success');
                return({
                    ...state,authError:null
                })
        case 'LOGON_FERROR':
                console.log('Login Error, the error is :',actions.err)
                return({
                    ...state,authError:actions.err.message
                })
        default:
            return state;
    }
}
export default authReducer;