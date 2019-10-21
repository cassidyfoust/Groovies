import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserMovie(action) {
    try {
        axios.post(`/api/add_user_movie`, action.payload)
        var queryText = action.payload.original_title.split(' ').join('+')
        yield put({type: 'FETCH_MOVIE_ID', payload: queryText})
        // yield axios.post(`/api/movie_user_junction_table`)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default addUserMovie;