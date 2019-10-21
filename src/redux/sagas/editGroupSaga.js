import axios from 'axios';
import { put } from 'redux-saga/effects';

function* editGroup(action) {
    try {
        console.log('edit group payload:', action.payload);
        let infoToSend = { group_id: action.payload.id, members: action.payload.addUserIds}
        console.log('the infoToSend is:', infoToSend)
        const response = yield axios.post(`/api/edit_group`, infoToSend)
        let deleteInfo = `${action.payload.id}-${action.payload.removeUserIds}`
        const response2 = yield axios.delete(`/api/edit_group/${deleteInfo}`)
        let nameChange = { group_id: action.payload.id, name: action.payload.newGroupName}
        const response3 = yield axios.post(`/api/edit_group`, nameChange);
        // yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.id });
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default editGroup;