import React, { Component } from 'react';
import './MyGroups.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../CreateGroup/CreateGroup';
import { connect } from 'react-redux';

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

    handleClick = () => {
        console.log("list item clicked");
        this.props.history.push("/GroupDetails")
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
                            return (
                                <> <MyListItem onClick={this.handleClick}>
                                    {group.group_name}
                                    </MyListItem>
                                </>
                            )
                        })}
            </MyList>
        </div>
        An asterisk indicates you are the owner of that group.
    </div>
)}
 }
export default connect(mapStateToProps)(MyGroupsPage);