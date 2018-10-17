import React from 'react';
import { Link } from 'react-router-dom';

const BlogSummary = (props) => {
    //console.log(props);
    const { blog }= props
    //console.log(blog);
    return(
        <div className="col-md-6">
            <div className="blog-post">
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-meta">{blog.date} <a href="/">{blog.author}</a></p>
                <p>Cum sociis natoque penatibus et magnis <a href="/">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sequi voluptatem exercitationem ipsum atque, sit molestiae delectus sed ipsam culpa, soluta odio error, excepturi quidem nulla veritatis impedit? Dicta, neque!</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </blockquote>
                <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <Link to={'/blogdetail/'+blog.id}><button className='btn btn-primary'>Devamını Oku</button></Link>
            </div>
        </div> 
    )
}
export default BlogSummary;