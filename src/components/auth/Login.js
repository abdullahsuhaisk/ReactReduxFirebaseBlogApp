import React, { Component } from 'react'

 class Login extends Component {
     state = {
         email:'',
         password:''
     }
     
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
  render() {
    return (
      <div>
        <form className="form-group">
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type='email' id='email' className="form-control" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    )
  }
}
export default Login;