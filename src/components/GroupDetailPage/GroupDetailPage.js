import React, {Component} from 'react';
import './GroupDetailPage.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import '../CreateGroup/CreateGroup'
import GroupMemberPic from './testprofpic.png';
import { connect } from 'react-redux';

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
        this.props.dispatch({ type: 'POST_GROUP_PREFERENCES', payload: { userGenres: this.props.reduxState.userPreferencesForGroup, id: this.props.match.params.id}})
    }

    groupPrefs = () => {
        this.props.history.push(`/GroupPreferences/${this.props.match.params.id}`)
    }

    render() {
        return (

    <div>
        <div className="back">
            <Link to="/MyGroups" className="backBtn">Back</Link>
            <button className="leaveBtn">Leave Group</button></div>
        <div><br></br>
            <br></br><h1>GROUP NAME GOES HERE</h1></div>
        <div className="pics">
                    {this.props.reduxState.groupDetails.map((member) => {
                        return (
                            <><div className="group-member"><img className="groupPics" src={GroupMemberPic}></img>
                            {member.username}
                            </div>
                            </>
                        )
                    })}
        </div>
        <div className="buttons">
            <button className="modal-btn">Edit Members</button>
            <button className="modal-btn" onClick={this.groupPrefs}>View Group Preferences</button>
            <button className="modal-btn">Suggest a New Movie</button>
            <button className="modal-btn">Suggest a Rewatch</button>
        </div>
    </div>
)}
}

export default connect(mapStateToProps)(GroupDetailPage);