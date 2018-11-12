import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import SearchBox from './SearchBox';

import {signOut} from '../../store/actions/authActions'
import {getCategories} from '../../store/actions/blogAction';

const Navbar = (props) => {
    const {auth,category,getCategories}=props;
    getCategories();
    //console.log(props)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Abdullah Süha Işık</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink  to="/" className="nav-link disabled">Home </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kategoriler
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {
                            category && category.map((item)=>{
                                return (
                                    <div key={item.id}>
                                    <Link className="dropdown-item" to={/category/+item.id}>{item.name}</Link>
                                    <div className="dropdown-divider"></div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </li>
                    <li className="nav-item left">
                        <NavLink className="nav-link disabled" to="/Cv">Cv</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link disabled" to="/Aboutme">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/Contact">Contact</Link>
                    </li>
                    {!auth.uid ? 
                    <ul className="navbar-nav mr-left">
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/SignIn">Sıgn</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/login">Log On</Link>
                        </li>
                    </ul>
                        : 
                    <li className="nav-item">
                        <a className="nav-link disabled" onClick={props.sigOut} href="/">Log Of</a>
                    </li>}
                    </ul>
                    <SearchBox />
                </div>
            </nav>
        </div>
    )
}

const mapStateToProp = (state) => {
    //console.log(state)
    return{
        auth:state.firebase.auth,
        category:state.firestore.ordered.category,
    }
}
const mapDispatchToProp = (dispatch) => {
    return{
        sigOut : () => dispatch(signOut()),
        getCategories: () => dispatch(getCategories())
    }
}
export default compose(connect(mapStateToProp, mapDispatchToProp),firestoreConnect([
    {collection:'category'}
]))(Navbar);