import axios from 'axios';
import { put } from 'redux-saga/effects';

function* addGroupMovie(action) {
    try {
        console.log('the action payload is:', action.payload)
        yield axios.post(`/api/add_group_movie`, action.payload.movieToAdd)
        // var queryText = action.payload.movieToAdd.original_title.split(' ').join('+')
        // yield put({type: 'FETCH_GROUP_MOVIE_ID', payload: {queryText: queryText, group_id: action.payload.group_id}})
        // yield axios.post(`/api/movie_user_junction_table`)
        // yield put({ type: 'FETCH_USER_GENRES', payload: action.payload.user_id });
    } catch (error) {
        console.log('error while posting user movie:', error)
    }
}

export default addGroupMovie;