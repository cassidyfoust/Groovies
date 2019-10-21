import axios from 'axios';
import { put } from 'redux-saga/effects';

function* changeGroupName(action) {
    try {
        console.log('changing name maybe')
        let nameChange = { group_id: action.payload.id, name: action.payload.newGroupName }
        yield axios.put(`/api/edit_group`, nameChange);
        // yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.id });
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default changeGroupName;