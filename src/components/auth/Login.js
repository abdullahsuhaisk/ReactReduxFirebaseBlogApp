import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOn } from '../../store/actions/authActions'

 class Login extends Component {
     state = {
         email:'',
         password:'',
         name:'',
         interest:''
     }
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.logOn(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
  render() {
    return (
      <div className="container">
        <form className="form-group">
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input type='email' id='email' className="form-control" onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" id="name" className="form-control" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="Interest">Interest</label>
                <select id="interest" onChange={this.handleChange} className="form-control">
                    <option value="Front-End">Front-End</option>
                    <option value="Back-End">Back-End</option>
                    <option value="Game">Game</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
            <button className="btn btn-primary center" onClick={this.handleClick}>Log In</button>
        </form>
      </div>
    )
  }
}

const mapstateToProps = (state,ownProps) => {
    console.log(state);
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return ({
        logOn: (newUser) => dispatch(logOn(newUser))
    })

}
export default connect(mapstateToProps,mapDispatchToProps)(Login);