import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AutoComplete from '../AutoComplete/AutoComplete'

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
        userIds: []
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SELECT_GROUP', payload: this.props.match.params.id });
        this.getInfo();
    }

    cancelBtn = () => {
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
            groupMembers: [...this.state.groupMembers, username],
            userIds: [...this.state.userIds, idToAdd]
        });
    }

    handleNameChange = (event) => {
        this.setState({
            ...this.state,
            newGroupName: event.target.value
        })
    }

    render() {

        return (

            <div>
                <div><br></br>
                    <br></br><h1>Edit {this.props.reduxState.groupDetails.name}</h1></div>
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
                    {this.state.groupMembers.map((member) => {
                        return (
                            <li>{member}</li>
                        )
                    }
                    )}
                </ul>
                <h3>Remove Group Members:</h3>
                <div className="pics">
                    <ul>
                    {this.props.reduxState.groupDetails.details.map((member) => {
                        return (
                            <><div className="group-member">
                                <li>{member.username}</li>
                            </div>
                            </>
                        )
                    })}
                    </ul>
                </div>
                <div>
                    <button className="backBtn">Save Changes</button>
                    <button onClick={this.cancelBtn} className="backBtn">Cancel</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GroupDetailPage);