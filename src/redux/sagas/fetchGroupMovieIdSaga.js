import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchGroupMovieId(action) {
    try {
        console.log('the query text is:', action.payload.queryText)
        const response = yield axios.get(`/api/add_group_movie/${action.payload.queryText}`)
        console.log('get movie id response:', response)
        axios.post(`/api/movie_group_junction_table`, {movie_id: response.data.id, group_id: action.payload.group_id})
        yield put({type:'FETCH_GROUP_MOVIES', payload: action.payload.group_id})
    } catch (error) {
        console.log('error while posting group movie:', error)
    }
}

export default fetchGroupMovieId;