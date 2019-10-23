import axios from 'axios';
import { put } from 'redux-saga/effects';

function* changeGroupName(action) {
    try {
        let nameChange = { group_id: action.payload.id, name: action.payload.newGroupName }
        axios.put(`/api/edit_group`, nameChange);
        yield put({type: '/SELECT_GROUP', payload: action.payload.id})
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default changeGroupName;