import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import BlogComment from './BlogComment';
import moment from 'moment';

const BlogDetail = (props) => {
    //console.log(props)
    const id = props.match.params.id;
    //console.log(id)
    const { blog } =props;
    
    console.log(blog)
    //if dont use if statement you've issue cause second rendering blog obje set
    if(!blog)
    return (<p>Loading ...</p>)
    else {
        function createMarkup() {
            return {__html: blog.content};
          }
        return (
            <div className="blog-post container text-center" >
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-meta">{moment(blog.date.toDate()).calendar()} <a href="/"> {blog.author}</a></p>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <BlogComment blogId={id} />
            </div> 
        )
    }
}
const mapStateToProps = (state, ownProps ) => {
    //console.log(ownProps);
    //console.log(state)
    const id = ownProps.match.params.id;
    //console.log(id)
    const blogss = state.firestore.data.Blog
    const blog = blogss ? blogss[id] : null
    return {
        blog: blog
    }
}
//fireStore connect statemde blog nesnesi olmasına yarar
export default compose(
    connect(mapStateToProps),firestoreConnect(
        [{collection:'Blog'}])
)(BlogDetail);