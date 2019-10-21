import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserMovie(action) {
    try {
        const response = yield axios.post(`/api/add_user_movie`, action.payload)
        console.log('response:', response)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default addUserMovie;