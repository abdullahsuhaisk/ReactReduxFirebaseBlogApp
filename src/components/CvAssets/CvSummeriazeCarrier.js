import React from 'react'

const CvSummeriazeCarrier = (props) => {
	const {carrier}= props;
	//console.log(carrier)
 if(!carrier){   
		return (
				<section className="resume-section summary-section mb-5">
					<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
							<div className="resume-section-content">
							<p className="mb-0">	Loading...</p>
							</div>
				</section>
						)}
	else {
 		return(		
	<section className="resume-section summary-section mb-5">
		<h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
		<div className="resume-section-content">
			<p className="mb-0">	{carrier.carr}</p> 
		</div>
	</section>

)	}
}

export default CvSummeriazeCarrier;