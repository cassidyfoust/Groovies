import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import './CreateGroup.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';

const Searchbar = styled(TextField)({
    height: 20,
    padding: 15,
    margin: 5
})

const CreateGroup = () => (
    <div>
        <h1>
            Create New Group:
            </h1>
            <div className="group-name">
        <h3>Group Name:</h3>
        <Searchbar
            id="outlined-name"
            placeholder="Enter a name"
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"></Searchbar>
        </div>
        <h3>Add Members:</h3>
        <div className="searchbar">
            <Searchbar
                id="outlined-name"
                placeholder="Search by username"
                // onChange={handleChange('name')}
                margin="normal"
                variant="outlined"></Searchbar>
            <IconButton aria-label="search">
                <SearchIcon />
            </IconButton>
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
);

export default CreateGroup;