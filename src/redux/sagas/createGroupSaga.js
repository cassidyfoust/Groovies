import axios from 'axios';
import { put } from 'redux-saga/effects';

function* createGroup(action) {
    try {
        yield axios.post(`/api/groups`, [action.payload.name, action.payload.admin_id])
        const response2 = yield axios.get(`/api/get_group_id/${action.payload.name}`)
        const valueToSend = response2.data[0]
        let memberIds = action.payload.memberIds
        let infoToSend = {group_id: valueToSend.id, members: memberIds}
        console.log('the infoToSend is:', infoToSend)
        yield put({type: 'ADD_GROUP_MEMBERS', payload: infoToSend})
        // const userGenres = yield axios.get(`/api/get_prefs_from_users/${valueToSend.id}`);
        // console.log('the user genres are:', userGenres)
        // yield axios.post(`/api/get_prefs_from_users`, [valueToSend.id, userGenres]);
        // yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.user_id })
    } catch (error) {
        console.log('error while creating group:', error)
    }
}

export default createGroup;