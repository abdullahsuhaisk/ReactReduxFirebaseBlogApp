import React, { Component } from 'react'

 class Contact extends Component {
     //Contact Page
     // This page going to has automaticly E-mail to owner's blog from who writes
     // For Now only dizayn
     state = {
       name:'',
       phone:'',
       email:'',
       message:''
     }
     handleChange = (e) => {
       this.setState ({
        [e.target.id]:e.target.value
       })
     }
     handleClick = (e) => {
       e.preventDefault();
       console.log(this.state);
     }
  render() {
    return (
      <div className="container">
        <br />
          <div className="row">
            <div className="col-md-8">
                <form className="formgroup">
                    <input type="text" id="name" className="form-control" placeholder="Name..." onChange={this.handleChange}/>
                    <input type="text" id="phone" className="form-control" placeholder="Phone ..." onChange={this.handleChange}/>
                    <input type="email" className="form-control" placeholder="Email ..." onChange={this.handleChange} id="email"/>
                    <textarea id="message" cols="30" rows="10" className="form-control" style={{height:"150px"}} onChange={this.handleChange} placeholder="Message ..."></textarea>
                    <div className="right">
                      <button className="btn btn-primary " onClick={this.handleClick}>Send</button>
                    </div>
                </form>
            </div>
            <div className="col-md4">
              <div className="card text-white bg-info mb-3" style={{"max-width":"18rem;"}}>
              <img className="card-img-top" src="https://s3.amazonaws.com/lowres.cartoonstock.com/children-math-math_student-maths_student-percent-percentages-jlvn607_low.jpg" alt="Card image cap" />
                <div className="card-header">A.Süha Işık</div>
                <div className="card-body">
                  <h5 className="card-title">Full Stack & Mobile Developer</h5>
                  <p className="card-text">Write Me </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Contact;