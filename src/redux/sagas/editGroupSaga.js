import axios from 'axios';
import { put } from 'redux-saga/effects';

function* editGroup(action) {
    try {
        console.log('edit group payload:', action.payload);
        let infoToSend = { group_id: action.payload.id, members: action.payload.addUserIds}
        console.log('the infoToSend is:', infoToSend)
        yield axios.post(`/api/edit_group`, infoToSend)
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default editGroup;