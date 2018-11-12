import React from 'react'

const ShowAbout = (props) => {
    const{about}=props;
    function createMarkup() {
        return {__html: about && about.about};
      }
  return (
        <div className="text-center">
            <br />
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-white bg-info mb-3" style={{width:"18rem"}}>
                        <img className="card-img-top" src={require('../CvAssets/images/profile.jpg')} style={{width:"18rem"}} />
                        <div className="card-header">A.Süha Işık</div>
                        <div className="card-body">
                            <h5 className="card-title">Full Stack & Mobile Developer</h5>
                            <p className="card-text">Write Me </p>
                        </div>
                    </div>
                </div>
            <div className="col-md-7" dangerouslySetInnerHTML={createMarkup()}>
                </div>
            </div>
        </div>
  )
}
export default(ShowAbout);