import axios from 'axios';
import { put } from 'redux-saga/effects';

function* createGroup(action) {
    try {
        yield axios.post(`/api/groups`, [action.payload.name, action.payload.admin_id])
        const response2 = yield axios.get(`/api/get_group_id/${action.payload.name}`)
        const valueToSend = response2.data[0]
        let memberIds = action.payload.memberIds
        let infoToSend = {group_id: valueToSend.id, members: memberIds}
        yield put({type: 'ADD_GROUP_MEMBERS', payload: infoToSend})
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default createGroup;