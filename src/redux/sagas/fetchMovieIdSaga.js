import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchMovieId(action) {
    try {
        const response = yield axios.get(`/api/add_user_movie/${action.payload}`)
        console.log('get movie id response:', response.data[0].id)
        // yield axios.post(`/api/movie_user_junction_table`)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default fetchMovieId;