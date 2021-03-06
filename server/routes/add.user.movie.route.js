const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route
 */
router.get('/:title', rejectUnauthenticated, (req, res) => {
    let queryText = ''
    let queryValues = req.params.title.split('+').join(' ')
    queryText = `SELECT "id" FROM "movies" WHERE "title" LIKE '%' || $1 || '%';`;
    pool.query(queryText, [queryValues])
        .then((result) => { console.log('the get result is:', result.rows); res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SEARCH NEW USER MOVIE', err)
        })
});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', rejectUnauthenticated, (req, res) => {
        let queryText = ''
        let queryValues = [req.body.original_title, req.body.overview, req.body.poster_path]
        queryText = `INSERT INTO "movies" ("title", "description", "poster_path") VALUES ($1, $2, $3);`;
        pool.query(queryText, queryValues)
            .then((res.sendStatus(200)))
            .catch((err) => {
                console.log('Error completing ADD NEW USER MOVIE', err)
            })
});

module.exports = router;