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
        movieToAdd: {},
        genreLikes: [],
        genreLikesNames: [],
        genreDislikes: [],
        genreDislikesNames: []
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

    addMovie = () => {
        console.log('Adding the following information:', this.state)
        this.props.dispatch({ type: 'ADD_USER_MOVIE', payload: { movieToAdd: this.state.movieToAdd, user_id: this.props.reduxState.user.id}})
        if (this.state.genreLikes !== [] && this.state.genreDislikes !== []){
        this.props.dispatch({ type: 'ADD_USER_LIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreLikes } });
        this.props.dispatch({ type: 'ADD_USER_DISLIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreDislikes } });
        }
        else if (this.state.genreLikes !== []){
            this.props.dispatch({ type: 'ADD_USER_LIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreLikes } });
        }
        else if (this.state.genreDislikes !== []){
            this.props.dispatch({ type: 'ADD_USER_DISLIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: this.state.genreDislikes } });
        }
        // create movie database
        // create user_movie database
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
            let imgURL = `https://image.tmdb.org/t/p/w200/${this.state.movieToAdd.poster_path}`
            movieDetails = <> <h3>{this.state.movieToAdd.original_title}</h3>
                <img src={imgURL}></img>
                <p><b>Description:</b> {this.state.movieToAdd.overview}</p>
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
            <button className="addMovieBtn" onClick={(event) => this.addMovie()}>Add Movie</button><Link to="/MyProfile" className="addMovieBtn">Cancel</Link>
        </div>
    </div>
)
}}

export default connect(mapStateToProps)(AddMyMovie);