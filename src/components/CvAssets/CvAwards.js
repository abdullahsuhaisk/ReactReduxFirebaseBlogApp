import React, { Component } from 'react'

export default class CvAwards extends Component {
  render() {
    return (
					    <section className="resume-section reference-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Projects</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled resume-awards-list">
								    <li className="mb-2 pl-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">Not Sepetim</div>
								        <div className="resume-award-desc">Online coppy center app. Which app made C# .Net and Signal R</div>
								    </li>
								    <li className="mb-0 pl-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">React Blog & Cv App</div>
								        <div className="resume-award-desc">The App merged simple blog and Cv apps for personel useles.The app made by React,Firebase</div>
								    </li>
										<li className="mb-0 pl-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">Tank Game</div>
								        <div className="resume-award-desc">The game made up Unity, Which assets Uniny AI and path Following. The tank has AI and touch,Perspetive</div>
								    </li>
										<li className="mb-0 pl-4 position-relative">
								        <i className="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
								        <div className="resume-award-name">Ping Pong Game</div>
								        <div className="resume-award-desc">The game made up Unity for mobile. Some feature add standart ping pong game so the game was gameable to now</div>
								    </li>
							    </ul>
						    </div>
					    </section>
    )
  }
}
