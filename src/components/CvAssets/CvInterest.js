import React, { Component } from 'react'

export default class CvInterest extends Component {
  render() {
		const {interest} = this.props;
    return (
					    <section className="resume-section interests-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled">
										{interest ?
										interest.interest.map((item)=> {
											return (<li className="mb-1" key={item}>{item}</li>)
										})
										:
										<p>Loading...</p>
										}
							    </ul>
						    </div>
					    </section>
    )
  }
}
