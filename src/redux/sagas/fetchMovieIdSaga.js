import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchMovieId(action) {
    try {
        console.log('the query text is:', action.payload.queryText)
        const response = yield axios.get(`/api/add_user_movie/${action.payload.queryText}`)
        console.log('get movie id response:', response)
        axios.post(`/api/movie_user_junction_table`, {movie_id: response.data.id, user_id: action.payload.user_id})
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default fetchMovieId;