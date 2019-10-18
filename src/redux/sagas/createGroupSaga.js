import axios from 'axios';
import { put } from 'redux-saga/effects';

function* createGroup(action) {
    try {
        yield axios.post(`/api/groups`, [action.payload.name, action.payload.admin_id])
        const response2 = yield axios.get(`/api/get_group_id/${action.payload.name}`)
        let infoToSend = [response2, action.payload]
        // yield axios.post(`/api/add_group_members`, infoToSend)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default createGroup;