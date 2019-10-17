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

const MyList = styled(List)({
    border: 1,
    borderColor: "#000000",
})

const MyListItem = styled(ListItem)({
    background: '#00acb0',
    border: 0,
    '&:hover': {
        background: 'white'
    },
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 26,
    width: "100%",
    paddingLeft: 7,
    paddingTop: 5,
    fontSize: 12,
    textAlign: "center"
});

class GroupDetailPage extends Component {

    groupPrefs = () => {
        this.props.history.push("/GroupPreferences")
    }

    render() {
        return (

    <div>
        <div className="back">
            <Link to="/MyGroups" className="backBtn">Back</Link>
            <button className="leaveBtn">Leave Group</button></div>
        <div><br></br>
            <br></br><h1>Example Group</h1></div>
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