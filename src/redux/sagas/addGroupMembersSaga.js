import axios from 'axios';
import { put } from 'redux-saga/effects';


function* addGroupMembersSaga(action) {
    try {
        const response = axios.post(`/api/add_group_members`, action.payload)
        yield put({ type: 'FETCH_GROUP_PREFERENCES_FROM_USER', payload: action.payload.group_id})
    } catch (error) {
        console.log('error while fetching group preferences:', error)
    }
}

export default addGroupMembersSaga;