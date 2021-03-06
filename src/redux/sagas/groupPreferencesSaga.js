import axios from 'axios';
import { put } from 'redux-saga/effects';

function* groupPreferencesSaga(action) {
    try {
        const response = yield axios.get(`/api/group_preferences_get/${action.payload}`);
        yield put({ type: 'SET_GROUP_PREFERENCES', payload: response.data })
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default groupPreferencesSaga;