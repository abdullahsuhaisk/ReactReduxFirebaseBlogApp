import React from 'react';

import BlogList from '../blog/BlogList';
//Çok okunanalar,Enson yazılanlar gelecek
class Blog extends React.Component {

    render(){
        return (
            <div>
                <BlogList />
            </div>
        )
    }
}

export default Blog;