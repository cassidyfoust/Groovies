import { all, takeEvery } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getGroups from './groupsSaga';
import getUserGenres from './userGenresSaga';
import deleteUserGenre from './deleteUserGenreSaga';
import addUserLikes from './addUserLikesSaga';
import addUserDislikes from './addUserDislikesSaga';
import getGroupDetails from './groupDetailsSaga';
import fetchGroupPreferencesFromUser from './fetchGroupPreferencesFromUserSaga';
import fetchGroupPreferences from './groupPreferencesSaga';
import deleteGroupGenre from './deleteGroupGenreSaga';
import createGroup from './createGroupSaga';
import addGroupMembers from './addGroupMembersSaga';
import postGroupGenres from './postGroupGenresSaga';
import addGroupLikes from './addGroupLikesSaga';
import addGroupDislikes from './addGroupDislikesSaga';
import editGroupSaga from './editGroupSaga'
import deleteFromGroup from './deleteFromGroupSaga';
import changeGroupName from './changeGroupNameSaga';

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
  yield takeEvery ('ADD_USER_DISLIKES', addUserDislikes);
  yield takeEvery('SELECT_GROUP', getGroupDetails);
  yield takeEvery('FETCH_GROUP_PREFERENCES_FROM_USER', fetchGroupPreferencesFromUser);
  yield takeEvery('FETCH_GROUP_PREFERENCES', fetchGroupPreferences);
  yield takeEvery('DELETE_GROUP_GENRE', deleteGroupGenre);
  yield takeEvery('CREATE_GROUP', createGroup);
  yield takeEvery('ADD_GROUP_MEMBERS', addGroupMembers);
  yield takeEvery('POST_PREFERENCES_GROUP_GENRES', postGroupGenres);
  yield takeEvery('ADD_GROUP_LIKES', addGroupLikes);
  yield takeEvery('ADD_GROUP_DISLIKES', addGroupDislikes);
  yield takeEvery('SAVE_CHANGES', editGroupSaga);
  yield takeEvery('DELETE_FROM_GROUP', deleteFromGroup);
  yield takeEvery('CHANGE_GROUP_NAME', changeGroupName);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
