import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import './CreateGroup.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import axios from 'axios';
import Suggestions from './Suggestions';

const Searchbar = styled(TextField)({
    height: 20,
    padding: 15,
    margin: 5
})

class CreateGroup extends Component {

    state = {
        groupName: '',
        id: this.props.match.params.id,
        query: '',
        searchResults: []
    }

    handleNameChange = (event) => {
        this.setState({
            ...this.state,
            groupName: event.target.value
        })
    }

    handleSearchChange = (event) => {
        this.setState({
            ...this.state,
            query: event.target.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    getInfo = () => {
        axios.get('/api/search_users?q=' + this.state.query)
            .then(({ data }) => {
                console.log('the search data is:', data)
                this.setState({
                    ...this.state,
                    searchResults: data
                })
            })
    }

    render() {

        return (
    <div>
        <h1>
            Create New Group:
            </h1>
            <div className="group-name">
        <h3>Group Name:</h3>
        <Searchbar
            id="outlined-name"
            placeholder="Enter a name"
            onChange={(event) => this.handleNameChange(event)}
            margin="normal"
            variant="outlined"></Searchbar>
        </div>
        <h3>Add Members:</h3>
        <div className="searchbar">
            <Searchbar
                id="outlined-name"
                placeholder="Search by username"
                onChange={(event) => this.handleSearchChange(event)}
                    margin="normal"
                variant="outlined"></Searchbar>
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
            <Suggestions results={this.state.searchResults} />
        </div>
        <ul>
            <li>Cass <IconButton><DeleteIcon /></IconButton></li>
            <li>Pat <IconButton><DeleteIcon /></IconButton></li>
            <li>Emma <IconButton><DeleteIcon /></IconButton></li>
            <li>Lumi <IconButton><DeleteIcon /></IconButton></li>
        </ul>
        <div className="buttons">
            <button className="createGroupBtn">Create Group</button><Link to="/MyGroups" className="createGroupBtn">Cancel</Link>
        </div>
    </div>
)}
        };

export default CreateGroup;