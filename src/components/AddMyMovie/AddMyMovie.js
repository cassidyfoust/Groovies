import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './AddMyMovie.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = reduxState => ({
    reduxState,
});

class AddMyMovie extends Component {

    state = {
        searchQuery: '',
        searchResults: [],
        showSuggestions: false
        // searchResultsWithId: [],
        // groupMembers: [this.props.reduxState.user.username],
        // userIds: [this.props.reduxState.user.id]
    }

    handleSearchChange = (event) => {
        this.setState({
            ...this.state,
            searchQuery: event.target.value
        })
    }

    searchMovies = () => {
        var queryText = this.state.searchQuery.split(' ').join('+')
        axios({method: 'GET',
            url: `/api/search_movies/${queryText}`})
            .then((response) => {
                console.log('the search response is:', response)
                // this.props.dispatch({ type: 'SET_RANDOM', payload: response.data })
                this.setState({
                    ...this.state,
                    searchResults: response.data.results
                })
            })
            .catch(error => {
                console.log('error in search:', error)
            })
        this.setState({
            ...this.state,
            showSuggestions: true
        })
    }

    render() {
        let suggestions;

        if (this.state.showSuggestions){
            suggestions = <><h4>Did you mean:</h4><ul>
                {this.state.searchResults.map((result) => {
                    return (
                        <li>{result.original_title}</li>
                    )
                }
                )}</ul></>
        }
        return (
    <div>
            <h1>
            Add Movie:
            </h1>
        <div className="searchbar">
            <TextField
            id="outlined-name"
            placeholder="Search by movie title"
            onChange={(event) => this.handleSearchChange(event)}
            margin="normal"
            variant="outlined"></TextField>
        <IconButton aria-label="search" onClick={(event) => {this.searchMovies()}}>
            <SearchIcon />
        </IconButton>
        </div>
        <h4>{suggestions}</h4>
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
)
}}

export default connect(mapStateToProps)(AddMyMovie);