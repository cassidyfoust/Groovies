import axios from 'axios';
import { put } from 'redux-saga/effects';


function* postGroupGenresSaga(action) {
    try {
        const response = yield axios.post(`/api/get_prefs_from_users/`, action.payload);
        console.log('post group preferences response:', response)
        yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.id })
    } catch (error) {
        console.log('error while posting group preferences:', error)
    }
}

export default postGroupGenresSaga;