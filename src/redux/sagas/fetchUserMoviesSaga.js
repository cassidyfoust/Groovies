import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchMovieId(action) {
    try {
        const response = yield axios.get(`/api/movie_user_junction_table/${action.payload}`)
        console.log('get user movies response:', response)
        yield put({ type: 'SET_USER_MOVIES', payload: response.data})
    } catch (error) {
        console.log('error while fetching user movie:', error)
    }
}

export default fetchMovieId;