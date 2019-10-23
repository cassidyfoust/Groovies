import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import './AddGroupMovie.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';

const MyCard = styled(Card)({
    background: '#F1EDBF',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // // color: 'white',
    // height: 60,
    width: 218,
    padding: 10,
    margin: 5,
    fontSize: 16,
    display: flexbox,
    textAlign: "center"
});

const mapStateToProps = reduxState => ({
    reduxState,
});

class AddGroupMovie extends Component {

    state = {
        searchQuery: '',
        searchResults: [],
        showSuggestions: false,
        showMovieDetails: false,
        movieToAdd: {},
        genreLikes: [],
        genreLikesNames: [],
        genreDislikes: [],
        genreDislikesNames: [],
    }

    handleSearchChange = (event) => {
        this.setState({
            ...this.state,
            searchQuery: event.target.value
        })
    }

    handleGenreDislikeChange = (event) => {
        if (event.target.value === 'Action') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 1]
            })
        }
        else if (event.target.value === 'Adventure') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 2]
            })
        }
        else if (event.target.value === 'Animation') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 3]
            })
        }
        else if (event.target.value === 'Comedy') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 4]
            })
        }
        else if (event.target.value === 'Crime') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 5]
            })
        }
        else if (event.target.value === 'Documentary') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 6]
            })
        }
        else if (event.target.value === 'Drama') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 7]
            })
        }
        else if (event.target.value === 'Family') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 8]
            })
        }
        else if (event.target.value === 'Fantasy') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 9]
            })
        }
        else if (event.target.value === 'History') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 10]
            })
        }
        else if (event.target.value === 'Horror') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 11]
            })
        }
        else if (event.target.value === 'Music') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 12]
            })
        }
        else if (event.target.value === 'Mystery') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 13]
            })
        }
        else if (event.target.value === 'Romance') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 14]
            })
        }
        else if (event.target.value === 'Science Fiction') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 15]
            })
        }
        else if (event.target.value === 'TV Movie') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 16]
            })
        }
        else if (event.target.value === 'Thriller') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 17]
            })
        }
        else if (event.target.value === 'War') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 18]
            })
        }
        else if (event.target.value === 'Western') {
            this.setState({
                ...this.state,
                genreDislikesNames: [...this.state.genreDislikesNames, event.target.value],
                genreDislikes: [...this.state.genreDislikes, 19]
            })
        }
    }

    handleGenreLikeChange = (event) => {
        if (event.target.value === 'Action') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 1]
            })
        }
        else if (event.target.value === 'Adventure') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 2]
            })
        }
        else if (event.target.value === 'Animation') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 3]
            })
        }
        else if (event.target.value === 'Comedy') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 4]
            })
        }
        else if (event.target.value === 'Crime') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 5]
            })
        }
        else if (event.target.value === 'Documentary') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 6]
            })
        }
        else if (event.target.value === 'Drama') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 7]
            })
        }
        else if (event.target.value === 'Family') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 8]
            })
        }
        else if (event.target.value === 'Fantasy') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 9]
            })
        }
        else if (event.target.value === 'History') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 10]
            })
        }
        else if (event.target.value === 'Horror') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 11]
            })
        }
        else if (event.target.value === 'Music') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 12]
            })
        }
        else if (event.target.value === 'Mystery') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 13]
            })
        }
        else if (event.target.value === 'Romance') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 14]
            })
        }
        else if (event.target.value === 'Science Fiction') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 15]
            })
        }
        else if (event.target.value === 'TV Movie') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 16]
            })
        }
        else if (event.target.value === 'Thriller') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 17]
            })
        }
        else if (event.target.value === 'War') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 18]
            })
        }
        else if (event.target.value === 'Western') {
            this.setState({
                ...this.state,
                genreLikesNames: [...this.state.genreLikesNames, event.target.value],
                genreLikes: [...this.state.genreLikes, 19]
            })
        }
    }

    searchMovies = () => {
        var queryText = this.state.searchQuery.split(' ').join('+')
        axios({
            method: 'GET',
            url: `/api/search_movies/${queryText}`
        })
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

    addMovie = () => {
        console.log('Adding the following information:', this.state)
        this.props.dispatch({ type: 'ADD_GROUP_MOVIE', payload: { movieToAdd: this.state.movieToAdd, group_id: this.props.match.params.id } })
        if (this.state.genreLikes !== [] && this.state.genreDislikes !== []) {
            this.props.dispatch({ type: 'ADD_GROUP_LIKES', payload: { group_id: this.props.match.params.id, genre_id: this.state.genreLikes } });
            this.props.dispatch({ type: 'ADD_GROUP_DISLIKES', payload: { group_id: this.props.match.params.id, genre_id: this.state.genreDislikes } });
        }
        else if (this.state.genreLikes !== []) {
            this.props.dispatch({ type: 'ADD_GROUP_LIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreLikes } });
        }
        else if (this.state.genreDislikes !== []) {
            this.props.dispatch({ type: 'ADD_GROUP_DISLIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreDislikes } });
        }
        else if (this.state.genreLikes == [] && this.state.genreDislikes == []){
            
        }
        this.props.history.push(`/GroupPreferences/${this.props.match.params.id}`)
    }

    render() {
        let suggestions;
        let movieDetails;

        if (this.state.showSuggestions) {
            suggestions = <><h4 className="header-4">Did you mean:</h4><div className="search-results">
                {this.state.searchResults.map((result) => {
                    let imgURL = `https://image.tmdb.org/t/p/w200/${result.poster_path}`
                    return (
                        <MyCard onClick={(event) => this.selectMovie(result)}><img src={imgURL}></img>{result.original_title}</MyCard>
                    )
                }
                )}</div></>
        }

        if (this.state.showMovieDetails) {
            let imgURL = `https://image.tmdb.org/t/p/w200/${this.state.movieToAdd.poster_path}`
            movieDetails = <><div className="add-movie-details">
                <div className="movie-info">
                    <div><img src={imgURL}></img></div>
                    <div className="movie-details">
                    <h3>{this.state.movieToAdd.original_title}</h3>
                    <p><b>Description:</b> {this.state.movieToAdd.overview}</p>
                    </div>
                    </div>
                <div className="genre-wrapper">
                <h3>What did you like about this film?</h3>
                <div className="genreUpdate"><b>Add Genre(s):</b>
                    <div><br></br></div>
                    <div className="select-wrapper">
                        <select className="select-css" onChange={(event) => this.handleGenreLikeChange(event)}>
                            <option>
                                None
                            </option>
                            {this.state.movieToAdd.genre_ids.map((genre) => {
                                let genreName;
                                if (genre === 28) {
                                    genreName = 'Action'
                                }
                                else if (genre === 12) {
                                    genreName = 'Adventure'
                                }
                                else if (genre === 16) {
                                    genreName = 'Animation'
                                }
                                else if (genre === 35) {
                                    genreName = 'Comedy'
                                }
                                else if (genre === 80) {
                                    genreName = 'Crime'
                                }
                                else if (genre === 99) {
                                    genreName = 'Documentary'
                                }
                                else if (genre === 18) {
                                    genreName = 'Drama'
                                }
                                else if (genre === 10751) {
                                    genreName = 'Family'
                                }
                                else if (genre === 14) {
                                    genreName = 'Fantasy'
                                }
                                else if (genre === 36) {
                                    genreName = 'History'
                                }
                                else if (genre === 27) {
                                    genreName = 'Horror'
                                }
                                else if (genre === 10402) {
                                    genreName = 'Music'
                                }
                                else if (genre === 9648) {
                                    genreName = 'Mystery'
                                }
                                else if (genre === 10749) {
                                    genreName = 'Romance'
                                }
                                else if (genre === 878) {
                                    genreName = 'Science Fiction'
                                }
                                else if (genre === 10770) {
                                    genreName = 'TV Movie'
                                }
                                else if (genre === 53) {
                                    genreName = 'Thriller'
                                }
                                else if (genre === 10752) {
                                    genreName = 'War'
                                }
                                else if (genre === 37) {
                                    genreName = 'Western'
                                }
                                return (
                                    <option>
                                        {genreName}
                                    </option>
                                )
                            })}
                        </select>
                        <ul>
                            {this.state.genreLikesNames.map((genre) => {
                                return <li>{genre}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <h3>What did you dislike about this film?</h3>
                <div className="genreUpdate"><b>Add Genre(s):</b>
                    <div><br></br></div>
                    <div className="select-wrapper">
                        <select className="select-css" onChange={(event) => this.handleGenreDislikeChange(event)}>
                            <option>
                                None
                            </option>
                            {this.state.movieToAdd.genre_ids.map((genre) => {
                                let genreName;
                                if (genre === 28) {
                                    genreName = 'Action'
                                }
                                else if (genre === 12) {
                                    genreName = 'Adventure'
                                }
                                else if (genre === 16) {
                                    genreName = 'Animation'
                                }
                                else if (genre === 35) {
                                    genreName = 'Comedy'
                                }
                                else if (genre === 80) {
                                    genreName = 'Crime'
                                }
                                else if (genre === 99) {
                                    genreName = 'Documentary'
                                }
                                else if (genre === 18) {
                                    genreName = 'Drama'
                                }
                                else if (genre === 10751) {
                                    genreName = 'Family'
                                }
                                else if (genre === 14) {
                                    genreName = 'Fantasy'
                                }
                                else if (genre === 36) {
                                    genreName = 'History'
                                }
                                else if (genre === 27) {
                                    genreName = 'Horror'
                                }
                                else if (genre === 10402) {
                                    genreName = 'Music'
                                }
                                else if (genre === 9648) {
                                    genreName = 'Mystery'
                                }
                                else if (genre === 10749) {
                                    genreName = 'Romance'
                                }
                                else if (genre === 878) {
                                    genreName = 'Science Fiction'
                                }
                                else if (genre === 10770) {
                                    genreName = 'TV Movie'
                                }
                                else if (genre === 53) {
                                    genreName = 'Thriller'
                                }
                                else if (genre === 10752) {
                                    genreName = 'War'
                                }
                                else if (genre === 37) {
                                    genreName = 'Western'
                                }
                                return (
                                    <option>
                                        {genreName}
                                    </option>
                                )
                            })}
                        </select>
                        <ul>
                            {this.state.genreDislikesNames.map((genre) => {
                                return <li>{genre}</li>
                            })}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            </>
        }
        return (
            <div>
                <h1 className="header-2">
                    Add Movie:
            </h1>
                <div className="searchbar">
                    <TextField
                        id="outlined-name"
                        placeholder="Search by movie title"
                        onChange={(event) => this.handleSearchChange(event)}
                        margin="normal"
                        variant="outlined"></TextField>
                    <IconButton aria-label="search" onClick={(event) => { this.searchMovies() }}>
                        <SearchIcon />
                    </IconButton>
                </div>
                <h4>{suggestions}</h4>
                {movieDetails}
                <div className="movie-buttons">
                    <div className="button-wrapper">
                    <button className="addMovieBtn" onClick={(event) => this.addMovie()}>Add Movie</button><Link to={`/GroupPreferences/${this.props.match.params.id}`} className="addMovieBtn">Cancel</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddGroupMovie);