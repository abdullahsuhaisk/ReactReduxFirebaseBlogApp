import React, { Component } from 'react'
import { connect } from 'react-redux';
import SummeryProject from './SummeryProject';
import BlogList from '../blog/BlogList';

 class Dashboard extends Component {
  render() {
    const {blogs} = this.props
    return (
      <div>
        <SummeryProject />
        <BlogList blogs={blogs} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    blogs:state.blogs
  }
}
export default connect(mapStateToProps)(Dashboard);
