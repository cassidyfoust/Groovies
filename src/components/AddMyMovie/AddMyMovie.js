import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './AddMyMovie.css';
import { Link } from 'react-router-dom';

const AddMyMovie = () => (
    <div>
            <h1>
            Add Movie:
            </h1>
        <div className="searchbar">
            <TextField
            id="outlined-name"
            placeholder="Search by movie title"
            // onChange={handleChange('name')}
            margin="normal"
            variant="outlined"></TextField>
        <IconButton aria-label="search">
            <SearchIcon />
        </IconButton>
        </div>
        <h3>Movie Title</h3>
        <p>Description: lorem ipsum blah blah blah</p>
        <h3>What did you like about this film?</h3>
        <div className="genreUpdate"><b>Add Genre:</b>
            <div><br></br></div>
            <div className="select-wrapper">
                <select className="select-css">
                    <option>
                        None
                         </option>
                        <option>
                            Example Genre
                        </option>
                        <option>
                            Example Genre 2
                        </option>
                </select>
            </div>
            </div>
        <h3>What did you dislike about this film?</h3>
        <div className="genreUpdate"><b>Add Genre:</b>
            <div><br></br></div>
            <div className="select-wrapper">
                <select className="select-css">
                    <option>
                        None
                         </option>
                    <option>
                        Example Genre
                        </option>
                    <option>
                        Example Genre 2
                        </option>
                </select>
            </div>
        </div>
        <div className="buttons">
            <button className="addMovieBtn">Add Movie</button><Link to="/MyProfile" className="addMovieBtn">Cancel</Link>
        </div>
    </div>
);

export default AddMyMovie;