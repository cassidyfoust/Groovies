import axios from 'axios';
import { put } from 'redux-saga/effects';

function* postGroupPreferences(action) {
    try {
        const response = yield axios.post(`/api/get_prefs_from_users`, action.payload);
        console.log('response:', response)
        yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.user_id })
    } catch (error) {
        console.log('error while fetching user genres:', error)
    }
}

export default postGroupPreferences;