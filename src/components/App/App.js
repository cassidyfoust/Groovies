import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import MyProfilePage from '../ProfilePage/ProfilePage';
import MyGroupsPage from '../MyGroups/MyGroups.js';
import AddMyMovie from '../AddMyMovie/AddMyMovie.js';
import CreateGroup from '../CreateGroup/CreateGroup.js';
import GroupDetailPage from '../GroupDetailPage/GroupDetailPage';
import GroupPreferences from '../GroupPreferences/GroupPreferences';
import AddGroupMovie from '../AddGroupMovie/AddGroupMovie';
import EditGroup from '../EditGroup/EditGroup';
import NavBar from '../NavBar/NavBar';

import './App.css';

class App extends Component {

  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            <ProtectedRoute
              exact
              path="/MyProfile"
              component={MyProfilePage}
            />
            <ProtectedRoute
              exact
              path="/MyGroups"
              component={MyGroupsPage}
            />
            <ProtectedRoute
              exact
              path="/AddUserMovie"
              component={AddMyMovie}
            />
            <ProtectedRoute
              exact
              path="/CreateGroup"
              component={CreateGroup}
            />
            <ProtectedRoute
              exact
              path="/GroupDetails/:id"
              component={GroupDetailPage}
            />
            <ProtectedRoute
              exact
              path="/GroupPreferences/:id"
              component={GroupPreferences}
            />
            <ProtectedRoute
              exact
              path="/AddGroupMovie/:id"
              component={AddGroupMovie}
            />
            <ProtectedRoute
              exact
              path="/EditGroup/:id"
              component={EditGroup}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
