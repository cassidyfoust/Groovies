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
        background: '#F1EDBF'
    },
    boxShadow: '0 1px 2px 1px rgba(255, 105, 135, .3)',
    width: "30%",
    margin: "0 auto",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
});

class MyGroupsPage extends Component{ 

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_GROUPS', payload: this.props.reduxState.user.id });
    }

    handleClick = (groupId) => {
        console.log("list item clicked", groupId);
        this.props.history.push({pathname: `/GroupDetails/${groupId}`})
    }

    render() {
        return (
    <div className="user-groups">
        <div>
        <h1 className="header-2">
            My Groups:
        </h1>
        <div>
            <Link to="/CreateGroup" className="groupsBtns">Create New Group</Link>
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
        <div className="groups-comments">
        (A star indicates you are the owner of that group.)
        </div>
    </div>
)}
 }
export default connect(mapStateToProps)(MyGroupsPage);