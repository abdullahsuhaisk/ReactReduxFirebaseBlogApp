import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/navbar';
import Dashboard from './dashboard/Dashboard';
import Blog from './blog/Blog';
import BlogDetail from './blog/BlogDetail';
import signIn from './auth/signIn';
import Login from './auth/Login';
import AddBlog from './admin/AddBlog';
import Contact from './Contact';
import CkEditor from './admin/ckEditor'
import Cv from './Cv';
import adminDasboard from './admin/adminDasboard';
import CategoryList from './dashboard/CategoryList';

class App extends Component {
  render() {
    // console.log(this.props)

    return (
      <BrowserRouter>
        <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blogdetail/:id" component={BlogDetail} />
          <Route exact path="/category/:id" component={CategoryList} />
          <Route path="/SignIn" component={signIn} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={adminDasboard} />
          <Route exact path="/admin/addblog" component ={AddBlog} />
          <Route exact path="/Contact" component ={Contact} />
          <Route exact path="/Cv" component ={Cv} />
          
          <Route path="/ck" component={CkEditor} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
