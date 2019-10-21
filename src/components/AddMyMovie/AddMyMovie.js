import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './AddMyMovie.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';

const MyCard = styled(Card)({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // // color: 'white',
    // height: 60,
    width: 220,
    paddingLeft: 7,
    paddingTop: 5,
    margin: 5,
    fontSize: 12,
    display: flexbox,
    textAlign: "center"
});

const mapStateToProps = reduxState => ({
    reduxState,
});

class AddMyMovie extends Component {

    state = {
        searchQuery: '',
        searchResults: [],
        showSuggestions: false,
        showMovieDetails: false,
        movieToAdd: {}
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

    selectMovie = (result) => {
        this.setState({
            ...this.state,
            showSuggestions: false,
            showMovieDetails: true,
            movieToAdd: result
        })
        console.log('the movie to add is:', result)
    }

    render() {
        let suggestions;
        let movieDetails;

        if (this.state.showSuggestions){
            suggestions = <><h4>Did you mean:</h4><div className="search-results">
                {this.state.searchResults.map((result) => {
                    let imgURL = `https://image.tmdb.org/t/p/w200/${result.poster_path}`
                    return (
                        <MyCard onClick={(event) => this.selectMovie(result)}><img src={imgURL}></img>{result.original_title}</MyCard>
                    )
                }
                )}</div></>
        }

        if (this.state.showMovieDetails) {
            movieDetails = <> <h3>{this.state.movieToAdd.original_title}</h3>
                <p>Description: {this.state.movieToAdd.overview}</p>
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
                </div></>
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
       {movieDetails}
        <div className="buttons">
            <button className="addMovieBtn">Add Movie</button><Link to="/MyProfile" className="addMovieBtn">Cancel</Link>
        </div>
    </div>
)
}}

export default connect(mapStateToProps)(AddMyMovie);