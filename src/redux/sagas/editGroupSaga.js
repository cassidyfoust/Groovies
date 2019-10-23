import axios from 'axios';
import { put } from 'redux-saga/effects';

function* editGroup(action) {
    try {
        let infoToSend = { group_id: action.payload.id, members: action.payload.addUserIds}
        yield axios.post(`/api/edit_group`, infoToSend)
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default editGroup;