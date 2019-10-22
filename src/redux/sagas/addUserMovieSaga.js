import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserMovie(action) {
    try {
        const response = axios.post(`/api/add_user_movie`, action.payload.movieToAdd)
        var queryText = action.payload.movieToAdd.original_title.split(' ').join('+');
        console.log('post response:', response)
        yield put({type: 'FETCH_MOVIE_ID', payload: {response: response, queryText: queryText, user_id: action.payload.user_id}})
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default addUserMovie;