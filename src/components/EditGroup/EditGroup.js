import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    }

    cancelBtn = () => {
        this.props.history.push(`/GroupDetails/${this.props.match.params.id}`)
    }

    render() {

        return (

            <div>
                <div><br></br>
                    <br></br><h1>Edit {this.props.reduxState.groupDetails.name}</h1></div>
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
                <div>
                    <button onClick={this.cancelBtn} className="backBtn">Cancel</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(GroupDetailPage);