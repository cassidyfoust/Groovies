const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route
 */
router.get('/:title', rejectUnauthenticated, (req, res) => {
    console.log('in the get route:', req.params.title)
    let queryText = ''
    let queryValues = req.params.title.split('+').join(' ')
    queryText = `SELECT "id" FROM "movies" WHERE "title" LIKE '%' || $1 || '%';`;
    pool.query(queryText, [queryValues])
        .then((result) => { console.log(result.rows[0]); res.send(result.rows[0]); })
        .catch((err) => {
            console.log('Error completing SEARCH NEW GROUP MOVIE', err)
        })
});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', rejectUnauthenticated, (req, res) => {
        let queryText = ''
        let queryValues = [req.body.original_title, req.body.overview, req.body.poster_path]
        queryText = `INSERT INTO "movies" ("title", "description", "poster_path") VALUES ($1, $2, $3);`;
        console.log(queryText, queryValues)
        pool.query(queryText, queryValues)
            .then(() => { })
            .catch((err) => {
                console.log('Error completing ADD NEW GROUP MOVIE', err)
            })
});

module.exports = router;