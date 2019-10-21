import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteFromGroup(action) {
    try {
        let deleteInfo = `${action.payload.id}-${action.payload.removeUserIds}`
        const response = yield axios.delete(`/api/edit_group/${deleteInfo}`)
    } catch (error) {
        console.log('error while deleting group member group:', error)
    }
}

export default deleteFromGroup;