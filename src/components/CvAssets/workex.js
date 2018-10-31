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
										        <h3 className="resume-position-title font-weight-bold mb-1">Senior Software Developer</h3>
										        <div className="resume-company-name ml-auto">Google</div>
										    </div>
										    <div className="resume-position-time">2014 - 2018</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel.</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements</h4>
										    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
										    <ul className="list-inline">
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">React</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Redux</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Django</span></li>
											    <li className="list-inline-item"><span className="badge badge-primary badge-pill">Webpack</span></li>
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
