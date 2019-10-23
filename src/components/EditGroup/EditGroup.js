import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AutoComplete from '../AutoComplete/AutoComplete';
import './EditGroup.css'

const mapStateToProps = reduxState => ({
    reduxState,
});

class GroupDetailPage extends Component {

    state = {
        id: this.props.match.params.id,
        groupDetails: this.props.reduxState.groupDetails.details,
        newGroupName: '',
        searchResults: [],
        searchResultsWithId: [],
        groupMembers: [],
        addGroupMembers: [],
        addUserIds: [],
        membersToDelete: [],
        removeUserIds: [],
        isChecked: false
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SELECT_GROUP', payload: this.props.match.params.id });
        this.getInfo();
        this.getGroupMembers();
    }

    cancelBtn = () => {
        this.props.history.push(`/GroupDetails/${this.props.match.params.id}`)
    }

    saveChanges = () => {
        this.props.dispatch({ type: 'SAVE_CHANGES', payload: this.state});
        this.props.dispatch({ type: 'DELETE_FROM_GROUP', payload: this.state});
        this.props.dispatch({ type: 'CHANGE_GROUP_NAME', payload: this.state})
        this.props.history.push(`/GroupDetails/${this.props.match.params.id}`)
    }

    getInfo = () => {
        axios.get('/api/search_users/')
            .then(({ data }) => {
                data.forEach(person => {
                    this.setState({
                        ...this.state,
                        searchResults: [...this.state.searchResults,
                        person.username],
                        searchResultsWithId: [...this.state.searchResultsWithId,
                            person]
                    })
                    console.log('in getInfo:', this.state.searchResults)
                })
            })
    }

    getGroupMembers = () => {
        axios.get(`/api/get_group_members/${this.props.match.params.id}`)
            .then(({ data }) => {
                data.forEach(person => {
                    this.setState({
                        ...this.state,
                        groupMembers: [...this.state.groupMembers,
                        person.username]
                    })
                })
            })
    }

    addGroupMember = (username) => {
        this.addGroupIds(username);
    }

    addGroupIds = (username) => {
        let idToAdd = 0
        this.state.searchResultsWithId.forEach(result => {
            if (username == result.username) {
                idToAdd = result.id
            }
        })
        this.setState({
            ...this.state,
            addGroupMembers: [...this.state.addGroupMembers, username],
            addUserIds: [...this.state.addUserIds, idToAdd]
        });
    }

    handleNameChange = (event) => {
        this.setState({
            ...this.state,
            newGroupName: event.target.value
        })
    }

    removeGroupMember = (username) => {
        let idToDelete = 0
        this.state.searchResultsWithId.forEach(result => {
            if (username == result.username) {
                idToDelete = result.id
            }
        })
        this.setState({
            ...this.state,
            membersToDelete: [...this.state.membersToDelete, username],
            removeUserIds: [...this.state.removeUserIds, idToDelete]
        });
    }

    render() {

        return (

            <div>
                <div><br></br>
                    <br></br><h1 className="header-1">Edit {this.props.reduxState.groupDetails.name}</h1></div>
                <div className="edit-group">
                    <div>
                    <h3>Change Group Name:</h3>
                    <input
                        id="outlined-name"
                        placeholder={this.props.reduxState.groupDetails.name}
                        onChange={(event) => this.handleNameChange(event)}
                        className="search-box" />
                    </div>
                <h3>Add Members:</h3>
                <div>
                    <AutoComplete options={this.state.searchResults} handleClick={this.addGroupMember} />
                </div>
                <ul>
                    {this.state.addGroupMembers.map((member) => {
                        return (
                            <li>{member}</li>
                        )
                    }
                    )}
                </ul>
                <h3>Remove Group Members:</h3>
                <h6>Note: you may only remove one group member at a time.</h6>
                <div className="remove-member">
                    <div>
                        <AutoComplete options={this.state.groupMembers} handleClick={this.removeGroupMember} />
                    </div>
                    <ul>
                        {this.state.membersToDelete.map((member) => {
                            return (
                                <li>{member}</li>
                            )
                        }
                        )}
                    </ul>
                </div>
                </div>
                <div className="button-wrapper">
                    <button className="editGroupBtns" onClick={this.saveChanges}>Save Changes</button>
                    <button onClick={this.cancelBtn} className="editGroupBtns">Cancel</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GroupDetailPage);