import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SummeryProject from './SummeryProject';
import BlogList from '../blog/BlogList';

 class Dashboard extends Component {
  render() {
    console.log(this.props);
    const {blogs,auth} = this.props
    //if members 've to required uncommend below line
    // if(!auth.uid) return <Redirect to='/Login' />
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
    blogs:state.blogs,
    firebase:state.firebase,
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Dashboard);
