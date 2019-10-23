import axios from 'axios';
import { put } from 'redux-saga/effects';

function* getGroupDetails (action) {
    try {
        const response = yield axios.get(`/api/group_details/${action.payload}`);
        yield put({ type: 'SET_GROUP_DETAILS', payload: response.data })
    } catch (error) {
        console.log('error while fetching groups:', error)
    }
}

export default getGroupDetails;