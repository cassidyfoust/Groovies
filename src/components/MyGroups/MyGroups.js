import React from 'react';
import './MyGroups.css';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupsList from '../GroupsList/GroupsList';

const MyGroupsPage = () => (
    <div>
        <div className="back">
            <Link to="/home" className="backBtn">Back</Link>
        </div>
        <div>
        <h1>
            My Groups:
        </h1>
            <GroupsList/>
        </div>
    </div>
);

export default MyGroupsPage;