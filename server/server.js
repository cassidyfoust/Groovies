
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const groupsRouter = require('./routes/groups.router');
const userGenresRouter = require('./routes/user.genres.router');
const addUserDislikesRouter = require('./routes/user.dislikes.router');
const addUserLikesRouter = require('./routes/user.likes.router');
const groupDetailsRouter = require('./routes/group.details.router');
const getGroupPrefsFromUsersRouter = require('./routes/get.group.preferences.from.users.router');
const groupPreferencesRouter = require('./routes/group.preferences.router');
const searchUsersRouter = require('./routes/search.users.router');
const getNewGroupIdRouter = require('./routes/new.group.id.router');
const addGroupMembersRouter = require('./routes/add.group.members.router.js');
const addGroupLikesRouter = require('./routes/add.group.likes.router');
const addGroupDislikesRouter = require('./routes/add.group.dislikes.router');
const getGroupMembersRouter = require('./routes/get.group.members.router');
const editGroupRouter = require('./routes/edit.group.router');
const searchMoviesRouter = require('./routes/search.movies.router');
const addUserMovieRouter = require('./routes/add.user.movie.route');
const userMovieJunctionRouter = require('./routes/user.movie.junction.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/user_genres', userGenresRouter)
app.use('/api/add_user_likes', addUserLikesRouter);
app.use('/api/add_user_dislikes', addUserDislikesRouter);
app.use('/api/group_details', groupDetailsRouter);
app.use('/api/get_prefs_from_users', getGroupPrefsFromUsersRouter);
app.use('/api/group_preferences_get', groupPreferencesRouter);
app.use('/api/search_users', searchUsersRouter);
app.use('/api/get_group_id', getNewGroupIdRouter);
app.use('/api/add_group_members', addGroupMembersRouter);
app.use('/api/add_group_likes', addGroupLikesRouter);
app.use('/api/add_group_dislikes', addGroupDislikesRouter);
app.use('/api/get_group_members', getGroupMembersRouter);
app.use('/api/edit_group', editGroupRouter);
app.use('/api/search_movies', searchMoviesRouter);
app.use('/api/add_user_movie', addUserMovieRouter);
app.use('/api/movie_user_junction_table', userMovieJunctionRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
