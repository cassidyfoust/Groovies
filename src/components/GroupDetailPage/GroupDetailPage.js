import React, {Component} from 'react';
import './GroupDetailPage.css';
import { Link } from 'react-router-dom';
import '../CreateGroup/CreateGroup'
import GroupMemberPic from './testprofpic.png';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';

const MyModal = styled(Modal)({
    position: 'relative',
    width: "300px",
    height: "450px",
    marginLeft: "30%",
    marginTop: "10%",
    padding: 50,
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #000'
})

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
        userGenres: this.props.reduxState.userPreferencesForGroup,
        id: this.props.match.params.id,
        suggestRewatchOpen: false,
        suggestNewMovieOpen: false,
        rewatchMovie: ''
    }

    generateRewatch = () => {
        let randomMovieNumber = Math.floor((Math.random() * (this.props.reduxState.groupMovies.length-1)) + 1)
        this.setState({
            ...this.state,
            rewatchMovie: { title: this.props.reduxState.groupMovies[randomMovieNumber].title, URL: `https://image.tmdb.org/t/p/w200/${this.props.reduxState.groupMovies[randomMovieNumber].poster_path}`},
            suggestRewatchOpen: true
        })
    }

    handleNewMovieOpen = () => {
        this.setState({
            ...this.state,
            suggestNewMovieOpen: true
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
        this.props.dispatch({ type: 'FETCH_GROUP_MOVIES', payload: this.props.match.params.id })
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
        edit = <button className="modal-btn" onClick={this.editGroup}>Edit Group</button>
    }

    return (
    <>
    <div>
        <div className="back">
            <Link to="/MyGroups" className="backBtn">Back</Link>
            <button className="leaveBtn" onClick={this.leaveGroup}>Leave Group</button></div>
        <div><br></br>
                <br></br><h1>{this.props.reduxState.groupDetails.name}</h1></div>
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
            <button className="modal-btn" onClick={this.groupPrefs}>View Group Preferences</button>
            <button className="modal-btn" onClick={this.handleNewMovieOpen}>Suggest a New Movie</button>
            <button className="modal-btn" onClick={this.generateRewatch}>Suggest a Rewatch</button>
        </div>
    </div>
        <MyModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.suggestNewMovieOpen}
            onClose={this.handleNewMovieClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            ><div>Try this:</div></MyModal>
        <MyModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={this.state.suggestRewatchOpen}
            onClose={this.handleRewatchClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            ><div>You should rewatch <h3>{this.state.rewatchMovie.title}</h3>
                    <img
                        src={this.state.rewatchMovie.URL}
                    /></div></MyModal>
        </>
    
)}
}

export default connect(mapStateToProps)(GroupDetailPage);