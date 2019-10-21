import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchGroupMovies(action) {
    try {
        const response = yield axios.get(`/api/movie_group_junction_table/${action.payload}`)
        console.log('get group movies response:', response)
        yield put({ type: 'SET_GROUP_MOVIES', payload: response.data})
    } catch (error) {
        console.log('error while fetching group movies:', error)
    }
}

export default fetchGroupMovies;