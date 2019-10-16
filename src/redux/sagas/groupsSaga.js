import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGroups(action) {
    try {
        const response = yield axios.get(`/api/groups/${action.payload}`);
        console.log('response:', response)
        yield put({ type: 'SET_USER_GROUPS', payload: response.data })
    } catch (error) {
        console.log('error while fetching groups:', error)
    }
}

export default getGroups;