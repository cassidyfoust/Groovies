import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchMovieId(action) {
    try {
        var newQueryText = action.payload.queryText.split(' ').join('+')
        const response = yield axios.get(`/api/add_user_movie/${newQueryText}`)
        console.log('get movie id response:', (response.data[0].id))
        yield axios.post(`/api/movie_user_junction_table`, {movie_id: response.data[0].id, user_id: action.payload.user_id})
        yield put({type:'FETCH_USER_MOVIES', payload: action.payload.user_id})
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default fetchMovieId;