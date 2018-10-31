import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class CvSkills extends Component {
	// componentDidMount() {
	// 	firebase.firestore().collection('personelInfo').doc('skills').get().then((data)=>{
	// 		console.log(data.data());
	// 	}).catch(err=>{
	// 		console.log(err) //Set the state with reducer
	// 	})
	// }
  render() {
	  const {skills} = this.props;
	//   console.log(skills);
	//   console.log(this.props);

	
    return (
                        <section className="resume-section skills-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
						    <div className="resume-section-content">
						        <div className="resume-skill-item">
							        <ul className="list-unstyled mb-4">
										{skills ?
											skills.map((item)=>{
												return(
												<li className="mb-2" key={item.name}>
								            		<div className="resume-skill-name">{item.name}</div>
									        			<div className="progress resume-progress">
											    			<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: item.value+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
								       			</li>
												)
											})
											
										:
										<p>Loading...</p>}
							        </ul>
						        </div>
						    </div>
					    </section>
    )
  }
}

const mapStateToProps = (state) => {
	return{
		skills: state.firestore.ordered.skills
	}
}
export default compose(connect(mapStateToProps),
	firestoreConnect(
		[{collection:'skills'}]
	))(CvSkills);