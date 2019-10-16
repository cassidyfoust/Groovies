import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getGroups from './groupsSaga';
import getUserGenres from './userGenresSaga';
import deleteUserGenre from './deleteUserGenreSaga';
import addUserLikes from './addUserLikesSaga';
import addUserDislikes from './addUserDislikesSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery ('FETCH_GROUPS', getGroups);
  yield takeEvery ('FETCH_USER_GENRES', getUserGenres);
  yield takeEvery ('DELETE_USER_GENRE', deleteUserGenre);
  yield takeEvery ('ADD_USER_LIKES', addUserLikes);
  yield takeEvery ('ADD_USER_DISLIKES', addUserDislikes)
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
