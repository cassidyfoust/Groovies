import axios from 'axios';
import { put } from 'redux-saga/effects';

function* pageGroupPreferences(action) {
    try {
        const response = yield axios.get(`/api/group_preferences_get/${action.payload}`);
        console.log('response:', response)
        yield put({ type: 'SET_PAGE_GROUP_PREFERENCES', payload: response.data })
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default pageGroupPreferences;