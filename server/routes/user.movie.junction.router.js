const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    let queryText = ''
    let queryValues = [req.params.id]
    queryText = `SELECT "title", "poster_path" FROM "user_movies"
    JOIN "movies" on "movies".id = "user_movies".movie_id
    JOIN "user" on "user".id = "user_movies".user_id
    WHERE "user".id = $1;`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(result => {
            console.log('the result is:', result.rows)
            // Sends back the results in an object
            res.send(result.rows)})
        .catch((err) => {
            console.log('Error completing SElECT FROM JUNCTION TABLE', err)
        })
});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    let queryText = ''
    let queryValues = [req.body.user_id, req.body.movie_id]
    queryText = `INSERT INTO "user_movies" ("user_id", "movie_id") VALUES ($1, $2);`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.log('Error completing ADD TO JUNCTION TABLE', err)
        })
});

module.exports = router;