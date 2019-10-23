import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getUserGenres(action) {
    try {
        const response = yield axios.get(`/api/user_genres/${action.payload}`);
        yield put({ type: 'SET_USER_GENRES', payload: response.data })
    } catch (error) {
        console.log('error while fetching user genres:', error)
    }
}

export default getUserGenres;