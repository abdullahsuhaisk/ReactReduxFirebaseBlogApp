import React from 'react'
import {Link} from 'react-router-dom';
import AddBlog from './AddBlog';
import {connect} from 'react-redux';
import {BlogUpdateStart} from '../../store/actions/blogAction';
import AdminBlogUpdate from './adminBlogUpdate';

 class adminBlogs extends React.Component {
    state = {
        title:'',
        category:'',
        content:'',
        date: null,
        metatag:'',
        blogId:null
    }
    handleClick (id, e) {
        //const key= e.target.value
        //[e.target.id] : e.target.value
        this.setState ({
            blogId:id
        })
        const {BlogUpdateStart} =this.props
        BlogUpdateStart(id)
        //console.log(id)
        //console.log(this.state)

    }
render() {
    const {articles,AdminBlog} = this.props;
    //console.log(this.props)
    return (
        <div>
            <h3 className="text-center">Blogs</h3>
            <ul className="list-group list-group-flush">
                {articles ? articles.map(blog=>{
                    return (
                        <li className="list-group-item" key={blog.id} onClick={(e) => this.handleClick(blog.id, e)} > {blog.title} </li>
                        )
                })
                :
                <li>Loading</li>
                }
            </ul>
            <div className="row">
                <div className="col-md-12">
                    {AdminBlog && AdminBlog.content ? 
                        <div>
                        <AdminBlogUpdate AdminBlog={AdminBlog} />
                        </div>
                    : 
                    <div>
                        <AddBlog />
                    </div>
                    }    
                </div>
            </div>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    return{
        AdminBlog:state.blogs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        BlogUpdateStart: (id) => dispatch(BlogUpdateStart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(adminBlogs);
