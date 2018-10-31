import React, { Component } from 'react'

export default class CvHeader extends Component {
  render() {
		//console.log(this.props)
		const {personelinfo, social} =this.props;
		//console.log(personelinfo);
    return (
     		<header className="resume-header pt-4 pt-md-0">
			    <div className="media flex-column flex-md-row">
				    <img className="mr-3 img-fluid picture mx-auto" src={require('./images/profile.jpg')} alt=""/>
				    <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
							{personelinfo ? 
								<div className="primary-info">
						    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">{personelinfo.name}</h1>
						    <div className="title mb-3">{personelinfo.job}</div>
						    <ul className="list-unstyled">
							    <li className="mb-2"><a href="/"><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>{personelinfo.email}</a></li>
							    <li><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>{personelinfo.phone}</li>
						    </ul>
					    </div>
							:
							null}
					    { social ?
								<div className="secondary-info ml-md-auto mt-2">
						    <ul className="resume-social list-unstyled">
				                <li className="mb-3"><a href={social.linkedin}><span className="fa-container text-center mr-2"><i className="fab fa-linkedin-in fa-fw"></i></span>linkedin.com/in/a.Suha</a></li>
				                <li className="mb-3"><a href={social.github}><span className="fa-container text-center mr-2"><i className="fab fa-github-alt fa-fw"></i></span>github.com/ASuha</a></li>
				                <li className="mb-3"><a href={social.insta}><span className="fa-container text-center mr-2"><i className="fab fa-instagram fa-fw"></i></span>instagram.com/Suhaisk/</a></li>
				                <li><a href={social.twit}><span className="fa-container text-center mr-2"><i className="fab fa-twitter fa-fw"></i></span>twitter.com/Suhaaa</a></li>
						    </ul>
					    </div>
							:
							<p>Loading... </p>}
					    
				    </div>
			    </div>
		    </header>
    )
  }
}
