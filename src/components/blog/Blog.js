import React from 'react';
import { connect } from 'react-redux';

import BlogList from '../blog/BlogList';
//Çok okunanalar,Enson yazılanlar gelecek
class Blog extends React.Component {
//Empty Component
    render(){
    const { blogs } = this.props
        console.log(blogs)
        return (
            <div>
                <BlogList blogs={blogs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        blogs: state.blogs
    }
}
export default connect(mapStateToProps)(Blog);