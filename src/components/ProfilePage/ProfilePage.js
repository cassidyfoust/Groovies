import React, {Component} from 'react';
import './ProfilePage.css';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { flexbox } from '@material-ui/system';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import UserMovies from '../UserMovies/UserMovies.js'

const mapStateToProps = reduxState => ({
    reduxState,
});

const MyCard = styled(Card)({
    // background: 'linear-gradient(175deg, #F1EDBF 20%, #FF8E53 22%)',
    background: '#FF8E53',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 2px 4px 1px #594C51',
    // color: 'white',
    height: 40,
    width: 120,
    paddingLeft: 7,
    paddingTop: 5,
    margin: 5,
    fontSize: 12,
    display: flexbox,
    textAlign: "center"
});

const MyDelete = styled(DeleteIcon)({
    padding: 0,
    margin: 0,
    height: 30,
})

const NewIconBtn = styled(IconButton)({
    padding: 0,
    margin: 0
})

class ProfilePage extends Component {

    state = {
        likesIsOpen: false,
        dislikesIsOpen: false,
        genreLikeName: '',
        genreLikeId: 0,
        genreDislikeName: '',
        genreDislikeId: 0
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER_GENRES', payload: this.props.reduxState.user.id });
        this.props.dispatch({ type: 'FETCH_USER_MOVIES', payload: this.props.reduxState.user.id })
    }

    handleDelete = (genreId) => {
        this.props.dispatch({type: 'DELETE_USER_GENRE', payload: {genre: genreId, id: this.props.reduxState.user.id}})
    }

    handleLikesOpen = () => {
       this.setState({...this.state,
           likesIsOpen: true
            })
    }

    handleDislikesOpen = () => {
        this.setState({
            ...this.state,
            dislikesIsOpen: true
        })
    }

    handleLikesClose = () => {
        this.setState({
            ...this.state,
            likesIsOpen: false
        })
    }

    handleDislikesClose = () => {
        this.setState({
            ...this.state,
            dislikesIsOpen: false
        })
    }

    handleLikeChange = (event) => {
        if (event.target.value === 'Action') {
            this.setState({...this.state,
                genreLikeName: 'Action',
                genreLikeId: 1
            })
        }
        else if (event.target.value === 'Adventure') {
            this.setState({
                ...this.state,
                genreLikeName: 'Adventure',
                genreLikeId: 2
            })
        }
        else if (event.target.value === 'Animation') {
            this.setState({
                ...this.state,
                genreLikeName: 'Animation',
                genreLikeId: 3
            })
        }
        else if (event.target.value === 'Comedy') {
            this.setState({
                ...this.state,
                genreLikeName: 'Comedy',
                genreLikeId: 4
            })
        }
        else if (event.target.value === 'Crime') {
            this.setState({
                ...this.state,
                genreLikeName: 'Crime',
                genreLikeId: 5
            })
        }
        else if (event.target.value === 'Documentary') {
            this.setState({
                ...this.state,
                genreLikeName: 'Documentary',
                genreLikeId: 6
            })
        }
        else if (event.target.value === 'Drama') {
            this.setState({
                ...this.state,
                genreLikeName: 'Drama',
                genreLikeId: 7
            })
        }
        else if (event.target.value === 'Family') {
            this.setState({
                ...this.state,
                genreLikeName: 'Family',
                genreLikeId: 8
            })
        }
        else if (event.target.value === 'Fantasy') {
            this.setState({
                ...this.state,
                genreLikeName: 'Fantasy',
                genreLikeId: 9
            })
        }
        else if (event.target.value === 'History') {
            this.setState({
                ...this.state,
                genreLikeName: 'History',
                genreLikeId: 10
            })
        }
        else if (event.target.value === 'Horror') {
            this.setState({
                ...this.state,
                genreLikeName: 'Horror',
                genreLikeId: 11
            })
        }
        else if (event.target.value === 'Music') {
            this.setState({
                ...this.state,
                genreLikeName: 'Music',
                genreLikeId: 12
            })
        }
        else if (event.target.value === 'Mystery') {
            this.setState({
                ...this.state,
                genreLikeName: 'Mystery',
                genreLikeId: 13
            })
        }
        else if (event.target.value === 'Romance') {
            this.setState({
                ...this.state,
                genreLikeName: 'Romance',
                genreLikeId: 14
            })
        }
        else if (event.target.value === 'Science Fiction') {
            this.setState({
                ...this.state,
                genreLikeName: 'Science Fiction',
                genreLikeId: 15
            })
        }
        else if (event.target.value === 'TV Movie') {
            this.setState({
                ...this.state,
                genreLikeName: 'TV Movie',
                genreLikeId: 16
            })
        }
        else if (event.target.value === 'Thriller') {
            this.setState({
                ...this.state,
                genreLikeName: 'Thriller',
                genreLikeId: 17
            })
        }
        else if (event.target.value === 'War') {
            this.setState({
                ...this.state,
                genreLikeName: 'War',
                genreLikeId: 18
            })
        }
        else if (event.target.value === 'Western') {
            this.setState({
                ...this.state,
                genreLikeName: 'Western',
                genreLikeId: 19
            })
        }
    }

    handleDislikeChange = (event) => {
        if (event.target.value === 'Action') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Action',
                genreDislikeId: 1
            })
        }
        else if (event.target.value === 'Adventure') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Adventure',
                genreDislikeId: 2
            })
        }
        else if (event.target.value === 'Animation') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Animation',
                genreDislikeId: 3
            })
        }
        else if (event.target.value === 'Comedy') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Comedy',
                genreDislikeId: 4
            })
        }
        else if (event.target.value === 'Crime') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Crime',
                genreDislikeId: 5
            })
        }
        else if (event.target.value === 'Documentary') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Documentary',
                genreDislikeId: 6
            })
        }
        else if (event.target.value === 'Drama') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Drama',
                genreDislikeId: 7
            })
        }
        else if (event.target.value === 'Family') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Family',
                genreDislikeId: 8
            })
        }
        else if (event.target.value === 'Fantasy') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Fantasy',
                genreDislikeId: 9
            })
        }
        else if (event.target.value === 'History') {
            this.setState({
                ...this.state,
                genreDislikeName: 'History',
                genreDislikeId: 10
            })
        }
        else if (event.target.value === 'Horror') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Horror',
                genreDislikeId: 11
            })
        }
        else if (event.target.value === 'Music') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Music',
                genreDislikeId: 12
            })
        }
        else if (event.target.value === 'Mystery') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Mystery',
                genreDislikeId: 13
            })
        }
        else if (event.target.value === 'Romance') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Romance',
                genreDislikeId: 14
            })
        }
        else if (event.target.value === 'Science Fiction') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Science Fiction',
                genreDislikeId: 15
            })
        }
        else if (event.target.value === 'TV Movie') {
            this.setState({
                ...this.state,
                genreDislikeName: 'TV Movie',
                genreDislikeId: 16
            })
        }
        else if (event.target.value === 'Thriller') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Thriller',
                genreDislikeId: 17
            })
        }
        else if (event.target.value === 'War') {
            this.setState({
                ...this.state,
                genreDislikeName: 'War',
                genreDislikeId: 18
            })
        }
        else if (event.target.value === 'Western') {
            this.setState({
                ...this.state,
                genreDislikeName: 'Western',
                genreDislikeId: 19
            })
        }
    }

    handleAddLikes = () => {
        this.props.dispatch({ type: 'ADD_USER_LIKES', payload: {user_id: this.props.reduxState.user.id, genre_id: [this.state.genreLikeId]}});
        this.handleLikesClose();
    }

    handleAddDislikes = () => {
        this.props.dispatch({ type: 'ADD_USER_DISLIKES', payload: { user_id: this.props.reduxState.user.id, genre_id: [this.state.genreDislikeId] }});
        this.handleDislikesClose();
    }

    render() {
        return (
            <>
            <div className="user-preferences">
        <h1 className="header-1">
            My Preferences:
    </h1>
    <div className="preference-wrapper">
    <h3>I Like:</h3>
        <div className="prefs">
                    {this.props.reduxState.userGenres.map((genre) => {
                        if(genre.like === true){
                        return (
                            <MyCard>
                                ⁠{genre.genre_name}
                                <NewIconBtn onClick={(event) => { this.handleDelete(genre.genre_id) }} >
                                    <MyDelete/>
                                </NewIconBtn>
                            </MyCard>
                        )}
                    }
                    )}
                    <MyCard>
                        <NewIconBtn>
                            <AddIcon onClick={this.handleLikesOpen}/>
                        </NewIconBtn>
                    </MyCard>
        </div>
    <h3>I Dislike:</h3>
        <div className="prefs">
                    {this.props.reduxState.userGenres.map((genre) => {
                        if (genre.like === false) {
                            return (
                                <MyCard>
                                    ⁠{genre.genre_name}
                                    <NewIconBtn onClick={(event) => { this.handleDelete(genre.genre_id) }} >
                                        <MyDelete/>
                                    </NewIconBtn>
                                </MyCard>
                            )
                        }
                    }
                    )}
            <MyCard>
                            <NewIconBtn onClick={this.handleDislikesOpen}>
                    <AddIcon/>
                </NewIconBtn>
            </MyCard>
        </div>
    <h3>I Watched:
        {/* {JSON.stringify(this.props.reduxState.userMovies)} */}
        <UserMovies/>
    </h3>
    <div>
    <Link to="/AddUserMovie" className="addMovieBtn">Add Movie</Link>
    {/* <Link to="/home" className="backBtn">Back</Link> */}
    </div>
    </div>
    </div>
                <Modal show={this.state.likesIsOpen} onHide={this.handleLikesClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h2>Add a genre to your likes:</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body><select onChange={this.handleLikeChange}>
                        <option>
                        </option>
                        <option>
                            Action
                            </option>
                        <option>
                            Adventure
                            </option>
                        <option>
                            Animation
                            </option>
                        <option>
                            Comedy
                            </option>
                        <option>
                            Crime
                            </option>
                        <option>
                            Documentary
                            </option>
                        <option>
                            Drama
                            </option>
                        <option>
                            Family
                            </option>
                        <option>
                            Fantasy
                            </option>
                        <option>
                            History
                            </option>
                        <option>
                            Horror
                            </option>
                        <option>
                            Music
                            </option>
                        <option>
                            Mystery
                            </option>
                        <option>
                            Romance
                            </option>
                        <option>
                            Science Fiction
                            </option>
                        <option>
                            TV Movie
                            </option>
                        <option>
                            Thriller
                            </option>
                        <option>
                            War
                            </option>
                        <option>
                            Western
                            </option>
                    </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleLikesClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.handleAddLikes}>
                            Add
          </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.dislikesIsOpen} onHide={this.handleDislikesClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><h2>Add a genre to your dislikes:</h2></Modal.Title>
                    </Modal.Header>
                    <Modal.Body><select onChange={this.handleDislikeChange}>
                        <option>
                        </option>
                        <option>
                            Action
                            </option>
                        <option>
                            Adventure
                            </option>
                        <option>
                            Animation
                            </option>
                        <option>
                            Comedy
                            </option>
                        <option>
                            Crime
                            </option>
                        <option>
                            Documentary
                            </option>
                        <option>
                            Drama
                            </option>
                        <option>
                            Family
                            </option>
                        <option>
                            Fantasy
                            </option>
                        <option>
                            History
                            </option>
                        <option>
                            Horror
                            </option>
                        <option>
                            Music
                            </option>
                        <option>
                            Mystery
                            </option>
                        <option>
                            Romance
                            </option>
                        <option>
                            Science Fiction
                            </option>
                        <option>
                            TV Movie
                            </option>
                        <option>
                            Thriller
                            </option>
                        <option>
                            War
                            </option>
                        <option>
                            Western
                            </option>
                    </select></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleDislikesClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.handleAddDislikes}>
                            Add
          </Button>
                    </Modal.Footer>
                </Modal>
            </>

);
        }
    }

export default connect(mapStateToProps)(ProfilePage);
