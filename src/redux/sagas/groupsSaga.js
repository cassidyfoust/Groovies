import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGroups() {
    try {
        const response = yield axios.get('/api/groups');
        console.log('response:', response)
        yield put({ type: 'SET_USER_GROUPS', payload: response.data })
    } catch (error) {
        console.log('error while fetching genres:', error)
    }
}

export default getGroups;