import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

const BlogSummary = (props) => {
    //console.log(props);
    const { blog }= props
    //console.log(blog);
    function Innerhtlm() {
        return {__html: blog.content.substr(0,350)+'...'};
    }
    return(
        <div className="col-md-6">
            <div className="blog-post">
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-meta">{moment(blog.date.toDate()).calendar()} <a href="/">{blog.author}</a></p>
                <p className="blog-post-content" dangerouslySetInnerHTML={Innerhtlm()}></p>
                <Link to={'/blogdetail/'+blog.id}><button className='btn btn-primary'>Devamını Oku</button></Link>
            </div>
        </div> 
    )
}
export default BlogSummary;