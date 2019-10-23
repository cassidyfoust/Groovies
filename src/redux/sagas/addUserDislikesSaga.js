import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserDislikes(action) {
    try {
        const response = yield axios.post(`/api/add_user_dislikes`, action.payload);
        yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id })
    } catch (error) {
        console.log('error while fetching user genres:', error)
    }
}

export default addUserDislikes;