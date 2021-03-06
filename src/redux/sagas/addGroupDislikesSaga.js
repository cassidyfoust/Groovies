import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addGroupDislikes(action) {
    try {
        const response = yield axios.post(`/api/add_group_dislikes`, action.payload)
        yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.group_id });
    } catch (error) {
        console.log('error while adding group genres:', error)
    }
}

export default addGroupDislikes;