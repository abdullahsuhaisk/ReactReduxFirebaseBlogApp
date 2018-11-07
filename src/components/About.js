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
            <div className="row">
                <div className="col-md-4">
                <div className="card text-white bg-info mb-3" style={{width:"18rem"}}>
              <img className="card-img-top" src={require('./CvAssets/images/profile.jpg')} style={{width:"18rem"}} />
                <div className="card-header">A.Süha Işık</div>
                <div className="card-body">
                  <h5 className="card-title">Full Stack & Mobile Developer</h5>
                  <p className="card-text">Write Me </p>
                </div>
                </div>
                </div>
                <div className="col-md-7">

          {
              about && about.about
          }
                </div>
            </div>

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