const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', (req, res) => {
    let queryText = ''
    let queryValues = [req.body.original_title, req.body.overview, req.body.poster_path]
    queryText = `INSERT INTO "user_movies" ("user_id", "movie_id") VALUES ($1, $2, $3);`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.log('Error completing ADD NEW USER MOVIE', err)
        })
});

module.exports = router;