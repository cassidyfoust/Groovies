import React, {Component} from 'react';
import './GroupDetailPage.css';
import { Link } from 'react-router-dom';
import '../CreateGroup/CreateGroup'
import GroupMemberPic from './testprofpic.png';
import { connect } from 'react-redux';
import swal from 'sweetalert';


const mapStateToProps = reduxState => ({
    reduxState,
});

class GroupDetailPage extends Component {

    state = {
        userGenres: this.props.reduxState.userPreferencesForGroup,
        id: this.props.match.params.id
    }

    componentDidMount() {
        this.props.dispatch({ type: 'SELECT_GROUP', payload: this.props.match.params.id });
        // this.props.dispatch({ type: 'POST_GROUP_PREFERENCES', payload: { userGenres: this.props.reduxState.userPreferencesForGroup, id: this.props.match.params.id}});
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
            <button className="modal-btn">Suggest a New Movie</button>
            <button className="modal-btn">Suggest a Rewatch</button>
        </div>
    </div>
)}
}

export default connect(mapStateToProps)(GroupDetailPage);