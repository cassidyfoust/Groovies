const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:title', (req, res) => {
    let queryText = ''
    let queryValues = req.params.title.split('+').join(' ')
    queryText = `SELECT "id" FROM "movies" WHERE "title" LIKE '%' || $1 || '%';`;
    console.log(queryValues, queryText)
    pool.query(queryText, [queryValues])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing SEARCH NEW USER MOVIE', err)
        })
});

/**
 * POST new movie to "movies" table in database
 */
router.post('/', (req, res) => {
        let queryText = ''
        let queryValues = [req.body.original_title, req.body.overview, req.body.poster_path]
        queryText = `INSERT INTO "movies" ("title", "description", "poster_path") VALUES ($1, $2, $3);`;
        console.log(queryText, queryValues)
        pool.query(queryText, queryValues)
            .then(() => { })
            .catch((err) => {
                console.log('Error completing ADD NEW USER MOVIE', err)
            })
});

module.exports = router;