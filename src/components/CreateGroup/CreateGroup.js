import React, {Component} from 'react';
import './CreateGroup.css';
import { Link } from 'react-router-dom';
// import { styled } from '@material-userIdsui/core/styles';
import axios from 'axios';
import { connect } from 'react-redux';
import AutoComplete from '../AutoComplete/AutoComplete'


const mapStateToProps = reduxState => ({
    reduxState,
});

class CreateGroup extends Component {

    state = {
        groupName: '',
        id: this.props.match.params.id,
        searchResults: [],
        searchResultsWithId: [],
        groupMembers: [],
        userIds: []
    }

    handleNameChange = (event) => {
        this.setState({
            ...this.state,
            groupName: event.target.value
        })
    }

    componentDidMount(){
        this.getInfo();
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

createGroup = () => {
    this.props.dispatch({type: 'CREATE_GROUP', payload:{name: this.state.groupName, memberIds: this.state.userIds, admin_id: this.props.reduxState.user.id} })
}

addGroupMember = (username) => {
    this.setState({
        ...this.state,
       groupMembers: [...this.state.groupMembers, username]
    });
    this.addGroupIds(username);
}

addGroupIds = (username) => {
    let idToAdd = 0
        this.state.searchResultsWithId.forEach(result => {
            if (username == result.username){
               idToAdd = result.id
            }
        })
    this.setState({
        ...this.state,
        userIds: [...this.state.userIds, idToAdd]
    });
}

    render() {

        return (
    <div>
        <h1>
            Create New Group:
            </h1>
            <div>
        <h3>Group Name:</h3>
        <input
            id="outlined-name"
            placeholder="Enter a name"
            onChange={(event) => this.handleNameChange(event)}
            className="search-box"/>
        </div>
        {JSON.stringify(this.state.groupName)}
        <h3>Members:</h3>
                <ul>
                    {this.state.groupMembers.map((member) => {
                        return(
                    <li>{member}</li>
                    )
                        }
                    )}
                </ul>
        <h3>Add Members:</h3>
        <div>
            <AutoComplete options={this.state.searchResults} handleClick={this.addGroupMember}/>
        </div>
        <div className="buttons">
            <button className="createGroupBtn" onClick={this.createGroup}>Create Group</button><Link to="/MyGroups" className="createGroupBtn">Cancel</Link>
        </div>
    </div>
)}
        };

export default connect(mapStateToProps)(CreateGroup);