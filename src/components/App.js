import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/navbar';
import Dashboard from './dashboard/Dashboard';
import Blog from './blog/Blog';
import BlogDetail from './blog/BlogDetail';
import signIn from './auth/signIn';
import Login from './auth/Login';
import AddBlog from './admin/AddBlog';
//import Cv from './Cv';

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
          <Route path="/SignIn" component={signIn} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin/addblog" component ={AddBlog} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
