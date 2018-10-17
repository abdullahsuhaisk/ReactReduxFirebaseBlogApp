import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signIn} from '../../store/actions/authActions'

class SignIn extends React.Component {
    state = {
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
        //     console.log('Login Succes');
        // })
        this.props.signIn(this.state)
    }
    render () {
    //console.log(this.props);
    const {auth, authError}=this.props;
    if(auth.uid) return <Redirect to='/' />

        return(
        <div className="container">
            <form className="form-signin" >
                    <div className="form-label-group">
                        <label> Email address </label>
                        <input type="email" id="email" className="form-control" placeholder="Email address" required="" onChange={this.handleChange} />
                    </div>
        
                    <div className="form-label-group">
                        <label> Password </label>
                        <input type="password" id="password" className="form-control" placeholder="Password" required="" onChange={this.handleChange}/>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit}>Sign in</button>
                    <div className="center">
                        {authError ? <p>{authError}</p> :null}
                    </div>
                    <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
            </form>
        </div>
            )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credit) => dispatch(signIn(credit))
    }
}
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);