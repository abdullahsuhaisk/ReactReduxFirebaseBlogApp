import React from 'react'
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import {getAbout,updateAbout} from '../../store/actions/personelInfoActions';
import firebase from 'firebase';

class UpdateAbout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about:'Yükleniyor'
        };
    }

onChangeCk = (evt) => {
        var newContent = evt.editor.getData();
        this.setState({
            about: newContent
        })
        console.log(this.state)
    }
handleClickGet = (e) => {
    e.preventDefault();
    this.getPersonelInfo()
}
handleClickUpdate = (e) => {
    e.preventDefault();
    this.props.updateAbout(this.state);
}
getPersonelInfo () {
    this.props.getAbout();
    firebase.firestore().collection('personelInfo').doc('about').get().then((doc)=>{
        console.log(doc.data().about);
        const a = doc.data().about
        this.setState({
            about:a
        })
        return
    })
}
render() {
    //console.log(this.props)
    //console.log(this.state)
    return (
        <div className="container">
            <CKEditor 
                activeClass="p10" 
                content={this.state.about} 
                events={{
                    "change": this.onChangeCk
                }}
                />
                <div className="row">
                    <div className="col-md-3">
                        <button className='btn btn-primary' onClick={this.handleClickGet}> GetAbout</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-succes" onClick={this.handleClickUpdate}>Save Changes</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Cancel Changes</button>
                    </div>
                </div>
        </div>
    )
}
}
const mapStateToProps = (state) =>{
    //console.log(state);
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getAbout: () => {dispatch(getAbout())},
        updateAbout : (about) => {dispatch(updateAbout(about))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UpdateAbout);