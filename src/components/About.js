import React from 'react'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import ShowAbout from './layout/ShowAbout';
import UpdateAbout from './layout/UpdateAbout';

const About = (props) => {

    const {authId,adminDoc,personelInfo} = props
    //console.log(personelInfo);

    const renderContent = (authId,adminDoc) => {
        if(authId !== adminDoc) {
            return (
                <ShowAbout about={personelInfo} />
            )
        }
        else return( <UpdateAbout />)
    }    
  return (
    <div>
        {renderContent(authId, adminDoc)}
    </div>
  )
}
const mapStateToProps = (state) => {
    //console.log(state);
    const admin = state.firestore.ordered.admin
    const adminDoc = admin && admin[0].docUid
    const info = state.firestore.data.personelInfo
    const personelInfo = info && info['about']
    //console.log(personelInfo);
    return {
        authId: state.firebase.auth.uid,
        adminDoc:adminDoc,
        personelInfo:personelInfo
    }
}
export default compose(connect(
    mapStateToProps
),
    firestoreConnect([{collection:'admin'},{collection:'personelInfo'}]))(About);