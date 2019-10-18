import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteGroupGenre(action) {
    let deleteInfo = `${action.payload.id}-${action.payload.genre}`
    try {
        yield axios.delete(`/api/group_preferences_get/${deleteInfo}`);
        yield put({ type: 'FETCH_GROUP_PREFERENCES', payload: action.payload.id });
    } catch (error) {
        console.log('Error while deleting group genre:', error);

    }
}

export default deleteGroupGenre;