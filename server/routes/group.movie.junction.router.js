const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    let queryText = ''
    let queryValues = [req.params.id]
    queryText = `SELECT "title", "poster_path" FROM "group_movies"
    JOIN "movies" on "movies".id = "group_movies".movie_id
    JOIN "group" on "group".id = "group_movies".group_id
    WHERE "group".id = $1;`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(result => {
            console.log('the result is:', result.rows)
            // Sends back the results in an object
            res.send(result.rows)})
        .catch((err) => {
            console.log('Error completing SElECT FROM GROUP JUNCTION TABLE', err)
        })
});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', (req, res) => {
    let queryText = ''
    let queryValues = [req.body.group_id, req.body.movie_id]
    queryText = `INSERT INTO "group_movies" ("group_id", "movie_id") VALUES ($1, $2);`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.log('Error completing ADD TO GROUP JUNCTION TABLE', err)
        })
});

module.exports = router;