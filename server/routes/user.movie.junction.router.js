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