const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT "username", "genre_name", "like" FROM "user"
    JOIN "user_genres" ON "user".id = "user_genres".user_id
    JOIN "genres" ON "genres".id = "user_genres".genre_id
    WHERE "user".id=$1;`
        pool.query(queryText, [req.params.id])
            .then((result) => { res.send(result.rows); })
            .catch((err) => {
                console.log('Error completing USER GENRES query', err);
                res.sendStatus(500);
            });
    });

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;