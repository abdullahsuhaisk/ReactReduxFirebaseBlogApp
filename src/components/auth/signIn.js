import React from 'react';

class signIn extends React.Component {

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
        console.log(this.state);
    }
    render () {
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
                    <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
            </form>
        </div>
            )
    }
}
export default signIn;