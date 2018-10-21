import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import SummeryProject from './SummeryProject';
import BlogList from '../blog/BlogList';
import { firestoreConnect } from 'react-redux-firebase';

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
  return {
    firebase:state.firebase,
    auth: state.firebase.auth,
    blogs: state.firestore.ordered.Blog,
    profile:state.firebase.profile
  }
}
export default compose(connect(mapStateToProps),firestoreConnect([{ collection: 'Blog' }]))(Dashboard);
