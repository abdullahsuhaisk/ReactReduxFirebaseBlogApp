import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { AddComment } from '../../store/actions/blogAction';
class BlogComment extends React.Component {
    state={
        comment:'',
        blogId:this.props.blogId,
        title:''
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
    const {comments, blogId, auth}=this.props;
    //console.log(comments);
    

    return (
        <div className="">
            <div class="list-group">
                {comments && comments.map(comment => {
                    return (
                        comment.blogId === blogId ?
                        <div className="list-group-item list-group-item-action flex-column align-items-start "  key={comment.id}>
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{comment.title}</h5>
                            <small>{comment.email}</small>
                            </div>
                            <p className="mb-1">{comment.comment}</p>
                            <small>{comment.userName}</small>
                        </div>
                        : 
                        null

                    )
                })} 
                <br />
            </div>
            {auth ?         
            <div className="row bg-info text-white">
                <div className="col-md-9 bg-white">
                    <form className="form-group">
                        <div className="form-group">
                            <input id="title" type="text" className="form-control" placeholder="Başlık giriniz" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input id="comment" type="text" className="form-control" placeholder="Yorumunuzu giriniz" onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
            <div className="col-md-3 bg-white">
                <button className="btn btn-primary" onClick={this.handleClick}>Gönder</button>
            </div>
          </div> : null }
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
        comments:comments,
        auth: state.firebase.auth.uid
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