const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
const queryText = `SELECT DISTINCT "genre_name", "genre_id", "group_genres".id, "tmdb", "like" FROM "group"
JOIN "group_genres" ON "group".id = "group_genres".group_id
JOIN "genres" ON "genres".id = "group_genres".genre_id
WHERE "group".id=$1`
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing GET USER GROUP PREFERENCES query', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
});

router.delete('/:deleteInfo', (req, res) => {
    let queryText = ''
    let queryValues = req.params.deleteInfo.split('-')
    queryText = 'DELETE from "group_genres" where "genre_id" = $1 and "group_id" = $2;';
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE movie genre query', err);
            res.sendStatus(500);
        });
});

module.exports = router;