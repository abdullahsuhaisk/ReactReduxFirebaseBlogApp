import React, { Component } from 'react'

export default class CvLang extends Component {
  render() {
		const {language} = this.props;
		console.log(language);
    return (
						<section className="resume-section language-section mb-5">
					    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
					    <div className="resume-section-content">
								{language ? 
								language.map((item) => {
							return(	
								<ul className="list-unstyled resume-lang-list" key={item.id}>
								<li key={item.id} className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">{item.name}</span> <small className="text-muted font-weight-normal">(Professional)</small>
								            		<div className="resume-skill-name">Read</div>
									        			<div className="progress resume-progress" key={"c"}>
											    				<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: item.Read+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
																<div className="resume-skill-name">Speak</div>
									        			<div className="progress resume-progress" key={"b"}>
											    				<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: item.Speak+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
																<div className="resume-skill-name">Write</div>
									        			<div className="progress resume-progress" key={"a"}>
											    				<div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: item.write+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
								       			</li>
							    
							  </ul>)
								})
								:
								<p>Loading...</p>
								}


						  </div>
					  </section>
    )
  }
}
