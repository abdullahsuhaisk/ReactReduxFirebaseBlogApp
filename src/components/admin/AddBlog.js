import React from 'react';
//import { compose } from 'redux';
import { blogAdd } from '../../store/actions/blogAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CKEditor from "react-ckeditor-component";


 class AddBlog extends React.Component {
    state ={
        title:'',
        category:'',
        content:'',
        date: new Date(),
        metatag:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id ] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addblog(this.state);
    }
    onChangeCk = (evt) =>{
        var newContent = evt.editor.getData();
        this.setState({
          content: newContent
        })
        console.log(this.state)
      }
  render(){
      //Admin Logic will come here
    const {uid}= this.props.auth;
    if(!uid) return <Redirect to='/signIn/' />
    return (
        <div>
        <h4 className="text-center">Add blog</h4>
        <div className="blog-post">
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id='title' onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-control" onChange={this.handleChange}>
                    Choose
                    <option>front-end</option>
                    <option>back-end</option>
                    <option>Game</option>
                </select>
            </div>
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "change": this.onChangeCk
              }}
            />
            <div className="form-group">
                <label htmlFor="metatag">MetaTag</label>
                <input type="text" className="form-control" id='metatag' onChange={this.handleChange}/>
            </div>
            <button className="btn btn-primary" onClick={this.handleClick}>Done</button>
        </form>
        </div>
        </div>   
    )
  }
}
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth:state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addblog: (blog) => dispatch(blogAdd(blog))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddBlog);


// CK editor will come
// Some notice will come about blogAdd in UI 