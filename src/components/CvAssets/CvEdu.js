import React, { Component } from 'react'

export default class CvEdu extends Component {
  render() {
    return (
                        <section className="resume-section education-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled">
								    <li className="mb-2">
								        <div className="resume-degree font-weight-bold">MSc in Computer Science</div>
								        <div className="resume-degree-org">University College London</div>
								        <div className="resume-degree-time">2010 - 2011</div>
								    </li>
								    <li>
								        <div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
								        <div className="resume-degree-org">Imperial College London</div>
								        <div className="resume-degree-time">2007 - 2010</div>
								    </li>
							    </ul>
						    </div>
					    </section>
    )
  }
}
