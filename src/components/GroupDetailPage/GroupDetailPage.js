import React, {Component} from 'react';
import './GroupDetailPage.css';
import '../CreateGroup/CreateGroup'
import GroupMemberPic from './testprofpic.png';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const MyCard = styled(Card)({
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 32,
    width: 90,
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

class GroupDetailPage extends Component {

    state = {
        id: this.props.match.params.id,
        suggestRewatchOpen: false,
        suggestNewMovieOpen: false,
        rewatchMovie: '',
        randomMovie: '',
    }

    generateNewMovie = () => {
        let randomGenreNumber = Math.floor(Math.random() * (this.props.reduxState.groupPreferences.length))
        this.setState({
            ...this.state,
            suggestNewMovieOpen: true
        })
        axios({
            method: 'GET',
            url: `/api/random_movie/${this.props.reduxState.groupPreferences[randomGenreNumber].tmdb}`
        })
            .then((response) => {
                this.setState({
                    ...this.state,
                    randomMovie: response.data,
                    randomMovieURL: `https://image.tmdb.org/t/p/w200/${response.data.poster_path}`
                })
            })
            .catch(error => {
                console.log('error:', error)
            })
    }

    generateRewatch = () => {
        let randomMovieNumber = Math.floor(Math.random() * (this.props.reduxState.groupMovies.length))
        this.setState({
            ...this.state,
            rewatchMovie: { title: this.props.reduxState.groupMovies[randomMovieNumber].title, URL: `https://image.tmdb.org/t/p/w200/${this.props.reduxState.groupMovies[randomMovieNumber].poster_path}`},
            suggestRewatchOpen: true
        })
    }

    handleRewatchClose = () => {
        this.setState({
            ...this.state,
            suggestRewatchOpen: false
        })
    }

    handleNewMovieClose = () => {
        this.setState({
            ...this.state,
            suggestNewMovieOpen: false
        })
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SELECT_GROUP', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_GROUP_PREFERENCES', payload: this.props.match.params.id });
        this.props.dispatch({ type: 'FETCH_GROUP_MOVIES', payload: this.props.match.params.id });
    }

    groupPrefs = () => {
        this.props.history.push(`/GroupPreferences/${this.props.match.params.id}`)
    }

    editGroup = () => {
        this.props.history.push(`/EditGroup/${this.props.match.params.id}`)
    }

    leaveGroup = () => {
        if (this.props.reduxState.groupDetails.admin === this.props.reduxState.user.id){
            swal({
                title: "You are the admin.",
                text: "You cannot leave this group.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
        }
        else {
        swal({
            title: "Are you sure?",
            text: "Once you leave a group, you cannot rejoin without admin invitation.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal(`You have left ${this.props.reduxState.groupDetails.name}`, {
                        icon: "success",
                    });
                    this.props.dispatch({ type: 'DELETE_FROM_GROUP', payload: { id: this.props.match.params.id, removeUserIds: this.props.reduxState.user.id } });
                    this.props.history.push('/MyGroups')
                }
            });
    }
}

render() {

    let edit;

    if (this.props.reduxState.groupDetails.admin === this.props.reduxState.user.id){
        edit = <button className="groupBtns" onClick={this.editGroup}>Edit Group</button>
    }

    return (
    <>
    <div className="groupDetails">
        <h1 className="header-2">{this.props.reduxState.groupDetails.name}</h1>
        <div className="pics">
                    {this.props.reduxState.groupDetails.details.map((member) => {
                        return (
                            <><div className="group-member"><img className="groupPics" src={GroupMemberPic}></img>
                            {member.username}
                            </div>
                            </>
                        )
                    })}
        </div>
        <div className="buttons">
            {edit}
            </div>
            <div className="detail-buttons">
            <button className="groupBtns" onClick={this.groupPrefs}>View Group Preferences</button>
            </div>
            <div className="detail-buttons">
            <button className="groupBtns" onClick={this.generateNewMovie}>Suggest a New Movie</button>
            </div>
            <div className="detail-buttons">
                    <button className="groupBtns" onClick={this.generateRewatch}>Suggest a Rewatch</button>
            </div>
            <div className="detail-buttons">
                    <button className="groupBtns" onClick={this.leaveGroup}>Leave Group</button>
            </div>
        </div>
            <Modal show={this.state.suggestNewMovieOpen} onHide={this.handleNewMovieClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You should watch</Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="random-movie-modal">
                <h3>{this.state.randomMovie.original_title}</h3>
                <div className="random-wrapper">
                        <div className="random-item"><img
                        src={this.state.randomMovieURL}
                        /></div>
                        <div className="random-item"><div><b>Description:</b></div><div>{this.state.randomMovie.overview}
                        </div>
                        </div>
                    </div>
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleNewMovieClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.suggestRewatchOpen} onHide={this.handleRewatchClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You should rewatch </Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="rewatch-modal"><div className="rewatch-item"><h3>{this.state.rewatchMovie.title}</h3></div>
                    <div className="rewatch-item">
                    <img
                        src={this.state.rewatchMovie.URL}
                    /></div>
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleRewatchClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    
)}
}

export default connect(mapStateToProps)(GroupDetailPage);