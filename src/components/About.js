import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class About extends React.Component{
render(){

    const {about}=this.props
    console.log(about)
      return (
        <div className="text-center">
            <br />
          {
              about && about.about
          }
        </div>
      )
    }

}

const mapStateToProps = (state) => {
    const datas = state.firestore.data.personelInfo
    const about = datas ? datas['about'] : null
    return{
        about:about
    }
}
export default compose(connect(mapStateToProps),firestoreConnect([{collection:'personelInfo'}]))(About);