import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserMovie(action) {
    try {
        axios.post(`/api/add_user_movie`, action.payload.movieToAdd)
        var queryText = action.payload.movieToAdd.original_title.split(' ').join('+')
        yield put({type: 'FETCH_MOVIE_ID', payload: {queryText: queryText, user_id: action.payload.user_id}})
        // yield axios.post(`/api/movie_user_junction_table`)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default addUserMovie;