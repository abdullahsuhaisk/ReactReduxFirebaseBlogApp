import React, { Component } from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import firebase from 'firebase';
import {firestoreConnect} from 'react-redux-firebase';

import {isAdmin} from '../../store/actions/adminActions';
import AdminMembers from './adminMembers';
import AdminComments from './adminComments';
import AdminBlogs from './adminBlogs';
import AdminNotifications from './adminNotifications';

 class adminDasboard extends Component {
    renderAdmin(adminDoc,userUid) {
        const {users,comments,articles,noti}=this.props;
        //console.log(articles)
        if(adminDoc && userUid) {
            if(adminDoc.docUid === userUid) {
                return (
                <div className="container">
                    <div className="jumbotron">
                        <h2 className="display-4"> Admin Page </h2>
                        <p className="lead">This is a simple React&FireStore Blog's Admin Page, Which page you can manage your's blog post and user and post's comment</p>
                        <hr className="my-4"/>
                        <p>If you see some issues please press bellow button and contact. And follow github link</p>
                        <a className="btn btn-primary btn-lg" href="https://github.com/abdullahsuhaisk" role="button">Learn more</a>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <AdminMembers users={users} />
                        </div>
                        <div className="col-md-4">
                            <AdminComments  comments={comments}/>
                        </div>
                        <div className="col-md-4">
                            <AdminNotifications noti={noti} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AdminBlogs articles={articles} />
                        </div>
                    </div>
                </div>
                )            
            }
            else return(<p>Wrong Router</p>) 
        }
        else return(<p>Loading...</p>)
    }
  render() {
    //console.log(this.props);
    const {isAdmin,inAdmin,userId,adminDoc}=this.props;
    isAdmin();
    // console.log(adminDoc);
    // console.log(userId);
    //if(adminDoc) console.log(adminDoc.docUid)
    return (
        <div>{this.renderAdmin(adminDoc,userId)}</div>
    
    )
  }
}
const mapStateToProps = (state) => {
    const adminCol = state.firestore.data.admin
    const adminDoc = adminCol ? adminCol.admin : null
    //console.log(adminDoc);

    return{
        inAdmin: state.admin.isAdmin,
        adminDoc: adminDoc,
        userId: state.firebase.auth.uid,
        users: state.firestore.ordered.users,
        comments: state.firestore.ordered.Comments,
        articles : state.firestore.ordered.Blog,
        noti: state.firestore.ordered.notifications
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isAdmin : (uId) => dispatch(isAdmin(uId))
    }
}
export default compose(firestoreConnect([
    {collection: 'admin'},
    {collection: 'users'},
    {collection: 'Comments'},
    {collection: 'Blog'},
    {collection:'notifications',limit:6,orderBy:['time','desc']}

]),connect(mapStateToProps,mapDispatchToProps))(adminDasboard);