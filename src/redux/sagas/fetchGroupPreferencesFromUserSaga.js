import axios from 'axios';
import { put } from 'redux-saga/effects';


function* getGroupPreferencesFromUser(action) {
    try {
        console.log('group preferences saga hit')
        const response = yield axios.get(`/api/get_prefs_from_users/${action.payload}`);
        console.log('set group preferences response:', response)
        yield put({ type: 'USER_PREFERENCES_FOR_GROUP', payload: response.data})
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default getGroupPreferencesFromUser;