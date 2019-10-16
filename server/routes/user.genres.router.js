const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT "username", "genre_name", "like", "genre_id" FROM "user"
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

router.delete('/:deleteInfo', (req, res) => {
    console.log(req.params.deleteInfo)
    let queryText = ''
    let queryValues = req.params.deleteInfo.split('-')
    queryText = 'DELETE from "user_genres" where "user_id" = $1 and "genre_id" = $2;';
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE movie genre query', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;