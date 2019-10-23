# Groovies: Movies for Groups

Groovies is a social site which recommends new movies to groups of users based on their personal preferences. Users can upload their individual likes and dislikes, add new movies they've watched, and create groups with their friends. Once a group is created, user preferences are cross-referenced to generate a random suggestion of a movie you all might like.

## Built With

- React
- Redux
- Redux Sagas
- CSS
- HTML
- Material UI
- Bootstrap UI

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installing

Steps to get the development environment running.

1. Download this project.
2. Spin up a database called "prime_app" using database.sql queries
2. `npm install`
3. `npm run server`
4. `npm run client`
5. You're good to go!

### Completed Features

High level list of items completed.

- [x] Users can upload personal likes and dislikes
- [x] Users can add movies they've watched
- [x] Users can create groups of friends (searchable by username)
- [x] Group admins can update group preferences without altering individual users' preferences
- [x] Group admins can edit the group (including name and members)
- [x] Users can get new movie and rewatch suggestions randomly generated based on preferences

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Users can add movie preferences for actors and directors in addition to genres
- [ ] Suggested movies exclude all group dislikes
- [ ] The admin of a group can delete a group

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Authors

* Cassidy Foust

## Color Scheme:

- teal: #82C9C1
- brown: #594C51
- orange: #FAB564
- pink: #F9525A
- tan: #F1EDBF