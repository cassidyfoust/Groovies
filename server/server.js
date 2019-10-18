
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const groupsRouter = require('./routes/groups.router');
const userGenresRouter = require('./routes/user.genres.router')
const addUserDislikesRouter = require('./routes/user.dislikes.router')
const addUserLikesRouter = require('./routes/user.likes.router')
const groupDetailsRouter = require('./routes/group.details.router')
const getGroupPrefsFromUsersRouter = require('./routes/get.group.preferences.from.users.router')
const groupPreferencesRouter = require('./routes/group.preferences.router')
const searchUsersRouter = require('./routes/search.users.router')
const getNewGroupIdRouter = require('./routes/new.group.id.router')

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
app.use('/api/search_users', searchUsersRouter)
app.use('/api/get_group_id', getNewGroupIdRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
