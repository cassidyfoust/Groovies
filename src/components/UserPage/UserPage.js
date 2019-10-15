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
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <img src={TestImage} className="profPic"></img>
    <div className="buttons">
      <Link to="/MyProfile" className="newBtn">My Profile</Link>
      <Link to="/MyGroups" className="newBtn">My Groups</Link>
    </div>
      <LogOutButton className="log-in" />
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
