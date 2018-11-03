import React from 'react'
import {Link} from 'react-router-dom';

 const adminBlogs = (props) => {
    const {articles} = props;
    console.log(props)
  return (
    <div>
        <h3>Blogs</h3>
        <ul className="list-group list-group-flush">
            {articles ? articles.map(blog=>{
                return (
                    <Link to="/" key={blog.id}>
                    <li className="list-group-item"> {blog.title} </li>
                    </Link>)
            })
            :
            <li>Loading</li>
            }

            
        </ul>
    </div>
  )
}
export default adminBlogs;
