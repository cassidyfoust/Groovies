import React, { Component } from 'react';
import './MyGroups.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../CreateGroup/CreateGroup';
import { connect } from 'react-redux';
import GradeIcon from '@material-ui/icons/Grade';

const mapStateToProps = reduxState => ({
    reduxState,
});


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

class MyGroupsPage extends Component{ 

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GROUPS', payload: this.props.reduxState.user.id });
    }

    handleClick = (groupId) => {
        console.log("list item clicked", groupId);
        this.props.dispatch({ type: 'FETCH_GROUP_PREFERENCES_FROM_USER', payload: groupId});
        this.props.history.push({pathname: `/GroupDetails/${groupId}`})
    }

    render() {
        return (
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
            {this.props.reduxState.groups.map((group) => {
                if (group.admin === this.props.reduxState.user.id){
                            return (
                                <> <MyListItem onClick={(event) => {this.handleClick(group.id)}}>
                                    {group.group_name}
                                    <GradeIcon/>
                                    </MyListItem>
                                </>
                            )
                }
                else {
                    return (
                        <> <MyListItem onClick={(event) => { this.handleClick(group.id) }}>
                            {group.group_name}
                        </MyListItem>
                        </>
                    )
                }
                        })}
            </MyList>
        </div>
        (A star indicates you are the owner of that group.)
    </div>
)}
 }
export default connect(mapStateToProps)(MyGroupsPage);