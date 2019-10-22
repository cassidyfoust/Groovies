import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css';
import TestImage from './testprofpic.png';
import { Link } from 'react-router-dom';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div className="page-body">
    <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    </div>
    <div>
    <img src={TestImage} className="profPic"></img>
    </div>
    <div className="buttons">
      <div className="margins">
      <Link to="/MyProfile" className="profBtn">My Preferences</Link>
      </div>
      <div>
      <Link to="/MyGroups" className="profBtn">My Groups</Link>
      </div>
    </div>
    <div className="logout-profile">
      <LogOutButton className="log-in" />
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
