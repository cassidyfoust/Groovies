import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => (

            <div className="nav">
                <div className="nav-right">
                    <Link to={'/Home'} className="navLinks"> Dashboard</Link>
                    <Link to={'/MyGroups'} className="navLinks"> My Groups</Link>
                    <Link to={'/MyProfile'} className="navLinks"> My Preferences</Link>
            </div>
            </div>
)

export default NavBar;