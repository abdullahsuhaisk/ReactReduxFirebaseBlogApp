import React from 'react'

 export class workex extends React.Component {
	render(){
		const {workEx}= this.props;	
		//console.log(workEx)
		var workex = workEx;
		if (!workEx) return null;	
    return (
                    <section className="resume-section experience-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
						    <div className="resume-section-content">
							    <div className="resume-timeline position-relative">
								    <article className="resume-timeline-item position-relative pb-5">  
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">{workex.position}</h3>
										        <div className="resume-company-name ml-auto">{workex.companyName}</div>
										    </div>
										    <div className="resume-position-time">{workex.startDate} - {workex.endDate}</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>{workex.achiments}</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
										    <ul>
												{workEx.achimentsWork.map((data)=> {
													return(
														<li key={data}>{data}</li>
													)
												})}
										    </ul>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul className="list-inline">
											    {workEx.Tech.map((data)=> {
													return(
														<li key={data} className="list-inline-item"><span className="badge badge-primary badge-pill">{data}</span></li>
														
													)
												})}
												
										    </ul>
									    </div>

								    </article>
								    
								    <article className="resume-timeline-item position-relative pb-5">
									    
									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Junior Software Developer</h3>
										        <div className="resume-company-name ml-auto">YesilIsikBilisim</div>
										    </div>
										    <div className="resume-position-time">2014 - 2017</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>I ve worked Free Lancer to web project.That projects generally basic web site</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
										    <p>Use joomla, wordpress and help develop moduls</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul className="list-inline">
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Php</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Seo</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Joomla</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Wordpress</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">HTML/SASS</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">MySQL</span></li>
										    </ul>
									    </div>
								    </article>					    
							    </div>
							    
						    </div>
					    </section>
    )
}
}
export default workex;
