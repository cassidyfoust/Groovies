import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGroupPreferences(action) {
    try {
        const response = yield axios.get(`/api/group_preferences_set/${action.payload}`);
        console.log('response:', response)
        yield axios.post('/api/group_preferences_set', response.data)
        yield put({ type: 'FETCH_PAGE_GROUP_PREFERENCES', payload: action.payload })
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default getGroupPreferences;