import React from 'react';
import BlogSummary from './BlogSummery';

class BlogList extends React.Component {
    render(){
        //console.log(this.props);
        const blogs = this.props.blogs
        //console.log(blogs);

        return (
            <div className="container">
            <div className="row mb-2">
                    {
                        blogs && blogs.map(blog => {
                            return (
                                <BlogSummary blog={blog} key={blog.id}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default BlogList;