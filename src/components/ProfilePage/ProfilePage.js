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

const mapStateToProps = reduxState => ({
    reduxState,
});


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

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER_GENRES', payload: this.props.reduxState.user.id });
    }

    handleDelete = (genreId) => {
        console.log('deleting:', genreId);
        this.props.dispatch({type: 'DELETE_USER_GENRE', payload: {genre: genreId, id: this.props.reduxState.user.id}})
    }

    render() {
        return (
            <div>
        <div className="back">
        <Link to="/home" className="backBtn">Back</Link>
        </div>
        <h1>
            My Preferences:
    </h1>
    <p>I Like:</p>
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
                            <AddIcon />
                        </NewIconBtn>
                    </MyCard>
        </div>
    <p>I Dislike:</p>
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
                <NewIconBtn>
                    <AddIcon/>
                </NewIconBtn>
            </MyCard>
        </div>
    <p>I Watched:
        Someday there will be a carousel here
    </p>
    <div>
    <Link to="/AddUserMovie" className="addMovieBtn">Add Movie</Link>
    </div>
    </div>
);
        }
    }

export default connect(mapStateToProps)(ProfilePage);
