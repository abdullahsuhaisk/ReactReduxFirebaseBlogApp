import React from 'react';
//import { compose } from 'redux';
import { BlogUpdate,cancelUpdateBlog } from '../../store/actions/blogAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddBlog from './AddBlog';


 class adminBlogUpdate extends React.Component {
    constructor(props) {
        super(props);
        const {AdminBlog}=this.props;
        this.state = {
            title:AdminBlog.title,
            category:AdminBlog.category,
            content:AdminBlog.content,
            date: new Date(),
            metatag:AdminBlog.metatag,
            id:AdminBlog.id
        };
      }
    handleChange = (e) => {
        this.setState({
            [e.target.id ] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        //console.log(this.props);
        this.props.updateblog(this.state); 

    }

    handleClickCancel = (e) => {
        e.preventDefault();
        //console.log(this.props);
        //this.props.history.push('/admin');
        this.props.cancelUpdateBlog();
    }

  render(){
    //console.log(this.state)
      //Admin Logic will come here
    const {uid}= this.props.auth;
    const {updatedBlog} = this.props
    console.log(updatedBlog);
    if(!uid) return <Redirect to='/signIn/' />
    if(updatedBlog !== 0)
    return (
        <div>
        <h4 className="text-center">Update blog</h4>
        <div className="blog-post">
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id='title' value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-control" onChange={this.handleChange}>
                    {this.state.category}
                    <option>Front-End</option>
                    <option>Back-End</option>
                    <option>Game</option>
                </select>
            </div>
            <div className="from-group">
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" cols="30" rows="10" className="form-control" value={this.state.content} onChange={this.handleChange}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="metatag">MetaTag</label>
                <input type="text" className="form-control" id='metatag' value={this.state.metatag} onChange={this.handleChange}/>
            </div>
            <div className="row">
                <div className="col-md-4">
                <button className="btn btn-primary" onClick={this.handleClick}>Update</button>
                </div>
                <div className="col-md-4">
                <button className="btn btn-danger" onClick={this.handleClickCancel}>Cancel</button> 
                </div>
                <div className="col-md-4">
                <button type="button" className="btn btn-warning">Warning</button>
                </div>
            </div>
        </form>
        </div>
        </div>
        
      )
      return (<AddBlog />)
  }
 
}
const mapStateToProps = (state) => {
    //console.log(state);
    return {
        auth:state.firebase.auth,
        updatedBlog:state.blogs.update
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateblog: (blog) => dispatch(BlogUpdate(blog)),
        cancelUpdateBlog : () => dispatch(cancelUpdateBlog())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(adminBlogUpdate);


// CK editor will come