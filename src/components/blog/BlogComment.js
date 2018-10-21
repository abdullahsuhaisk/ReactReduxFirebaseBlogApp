import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { AddComment } from '../../store/actions/blogAction';
class BlogComment extends React.Component {
    state={
        comment:'',
        blogId:this.props.blogId
    }   
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.AddComment(this.state)
    }
render() {
    console.log(this.props);
    const {comments,blogId}=this.props;
    console.log(comments);

    return (
        <div>
            <div className="container border border-primary ">
                {comments && comments.map(comment => {
                    return (
                        comment.blogId === blogId ?<div className="d-flex justify-content" key={comment.id}>{comment.comment}</div> : null
                    )
                })} 
                <br />
            </div>
        <div className="row bg-light">
            <div className="col-md-9 bg-white">
                <form className="form-group">
                    <div className="form-group">
                        <input id="comment" type="text" className="form-control" placeholder="Yorumunuzu giriniz" onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
            <div className="col-md-3 bg-white">
                <button className="btn btn-primary" onClick={this.handleClick}>Gönder</button>
            </div>
          </div>
        </div>
    
      )
    }   
}
const mapStateToProps = (state, ownProps) => {
    //state.firestore.data has 2 props. That's Blog and Comments
    console.log(state,ownProps);
   // const id = ownProps.blogId;
    const comments = state.firestore.ordered.Comments;
    return{
        comments:comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddComment: (newComment) => dispatch(AddComment(newComment))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),firestoreConnect(
        [{collection:'Comments'}])
    )(BlogComment);