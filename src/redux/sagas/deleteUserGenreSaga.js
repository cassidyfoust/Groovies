import axios from 'axios';
import { put } from 'redux-saga/effects';

function* deleteUserGenre(action) {
    let deleteInfo = `${action.payload.id}-${action.payload.genre}`
    try {
        yield axios.delete(`/api/user_genres/${deleteInfo}`);
        yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.id});
    } catch (error) {
        console.log('Error while deleting genre:', error);

    }
}

export default deleteUserGenre;