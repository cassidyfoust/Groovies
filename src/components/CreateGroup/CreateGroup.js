import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import './CreateGroup.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import axios from 'axios';
import AutoComplete from '../AutoComplete/AutoComplete'


class CreateGroup extends Component {

    state = {
        groupName: '',
        id: this.props.match.params.id,
        searchResults: [],
        groupMembers: []
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
                        person.username]
                })
                console.log('in getInfo:', this.state.searchResults)
            })
    })
}

addGroupMember = (username) => {
    console.log(username)
    this.setState({
        ...this.state,
        groupMembers: [...this.state.groupMembers,
        username]
    })
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
        <h3>Members:</h3>
                <ul>
                    {this.state.groupMembers.map((member) => {
                        return(
                    <li>{member}<IconButton><DeleteIcon /></IconButton></li>
                    )
                        }
                    )}
                </ul>
        <h3>Add Members:</h3>
        <div>
            <AutoComplete options={this.state.searchResults} handleClick={this.addGroupMember}/>
        </div>
        <div className="buttons">
            <button className="createGroupBtn">Create Group</button><Link to="/MyGroups" className="createGroupBtn">Cancel</Link>
        </div>
    </div>
)}
        };

export default CreateGroup;