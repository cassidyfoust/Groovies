import React from 'react';
import './MyGroups.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../CreateGroup/CreateGroup'

const MyList = styled(List)({
    border: 1,
    borderColor: "#000000",
})

const MyListItem = styled(ListItem)({
    background: '#00acb0',
    border: 0,
    '&:hover': {
        background: 'white'
    },
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 26,
    width: "100%",
    paddingLeft: 7,
    paddingTop: 5,
    fontSize: 12,
    textAlign: "center"
});

const MyGroupsPage = () => (
    <div>
        <div className="back">
            <Link to="/home" className="backBtn">Back</Link>
        </div>
        <div>
        <h1>
            My Groups:
        </h1>
        <div>
            <Link to="/CreateGroup" className="newBtn">Create New Group</Link>
        </div>
        <MyList>
            <MyListItem>
                Group 1
            </MyListItem>
            <MyListItem>
                    Group 2
            </MyListItem>
            <MyListItem>
                    Group 3
            </MyListItem>
        </MyList>
        </div>
    </div>
);

export default MyGroupsPage;