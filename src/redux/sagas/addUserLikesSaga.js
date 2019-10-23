import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addUserLikes(action) {
    try {
        const response = yield axios.post(`/api/add_user_likes`, action.payload)
        yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while fetching user genres:', error)
    }
}

export default addUserLikes;