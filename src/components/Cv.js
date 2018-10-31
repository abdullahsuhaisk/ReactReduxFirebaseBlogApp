import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import './CvAssets/css/pillar-1.css';

import CvHeader from './CvAssets/CvHeader';
import CvSummeriazeCarier from './CvAssets/CvSummeriazeCarrier';
import CvWorkExperiance from './CvAssets/workex';
import CvSkills from './CvAssets/CvSkills';
import CvEdu from './CvAssets/CvEdu';
import CvAwards from './CvAssets/CvAwards';
import CvLang from './CvAssets/CvLang';
import CvInterest from './CvAssets/CvInterest';


const Cv = (props) => {
    console.log(props)
    const {carrier, info, workex, social, language, interest}= props;

    return (
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
            <CvHeader personelinfo={info} social={social} />
		    <div className="resume-body p-5">
                <CvSummeriazeCarier carrier={carrier}/>
			    <div className="row">
				    <div className="col-lg-9">
                        { workex && workex.map((item)=> {
                            return  (<CvWorkExperiance workEx={item} key={item.id} />)
                        })}
				    </div>
				    <div className="col-lg-3">
					    <CvSkills />
					    <CvEdu />
                        <CvAwards />
					    <CvLang  language={language}/>
                        <CvInterest interest={interest} />					    
				    </div>
			    </div>
		    </div>
		    
		    
	    </div>
 
      
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    const datas = state.firestore.data.personelInfo;
    const carrier = datas ? datas['carrier'] : null;
    const personelinfo = datas ? datas['info'] : null;
    const skills = datas ? datas['skills'] : null;
    const social = datas ? datas['social'] : null;
    const interest = datas ? datas['interest'] : null;
    return {
        carrier : carrier,
        info : personelinfo,
        workex : state.firestore.ordered.workEx,
        skills : skills,
        social : social,
        language : state.firestore.ordered.Language,
        interest : interest
    }
}
export default compose(firestoreConnect([
    {collection:'personelInfo'},
    {collection:'workEx'},
    {collection:'Language'}  
]),connect(mapStateToProps))(Cv);