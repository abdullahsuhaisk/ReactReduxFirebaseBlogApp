import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Link} from 'react-router-dom';

 const CategoryList = (props) => {
   console.log(props);
   const{blogs}=props;
  return (
    <div className="row mb-2">
      {blogs && blogs.map((blog)=>{
        if(blog) {
          return(
        <div className="col-md-6" key={blog.id}>
          <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">{blog.category}</strong>
              <h3 className="mb-0">
                {blog.title}
              </h3>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto">{blog.content}</p>
              <Link to={/blogdetail/+blog.id}>Devamını Oku</Link>
            </div>
          </div>
        </div>
          )
        }
      })}
      </div>
  )
}
const mapStateToProps = (state,ownProp) => {
  console.log(state,ownProp);
  const categoryId = ownProp.match.params.id;
  const Blogs = state.firestore.ordered.Blog;
  const blogs = Blogs ? Blogs.map((item) => {
    if(categoryId===item.category)
      return item
  }) : null
  //Get new arrays with categoryId equlas own categoryIds
  return{
    blogs:blogs
  }
}
export default compose(connect(mapStateToProps),firestoreConnect([
  {collection:'Blog'}
]))(CategoryList);