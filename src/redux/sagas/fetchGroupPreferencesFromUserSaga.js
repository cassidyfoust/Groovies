import axios from 'axios';
import { put } from 'redux-saga/effects';


function* getGroupPreferencesFromUser(action) {
    try {
        const response = yield axios.get(`/api/get_prefs_from_users/${action.payload}`);
        console.log('set group preferences response:', response)
        yield put({ type: 'POST_PREFERENCES_GROUP_GENRES', payload: { id: action.payload, userGenres: response.data}})
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default getGroupPreferencesFromUser;