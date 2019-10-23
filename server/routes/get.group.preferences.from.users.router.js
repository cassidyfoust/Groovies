const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const queryText = `SELECT DISTINCT "genres".genre_name, "genres".id, "genres".tmdb, "user".username, "user_genres".like FROM "user"
JOIN "user_genres" ON "user".id = "user_genres".user_id
JOIN "genres" ON "genres".id = "user_genres".genre_id
JOIN "user_group" ON "user".id = "user_group".user_id
JOIN "group" ON "group".id = "user_group".group_id
WHERE "group".id=$1;`
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing USER GROUP PREFERENCES query', err);
            res.sendStatus(500);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    for (let i=0; i<req.body.userGenres.length; i++){
    let queryText = ''
    let queryValues = [req.body.id, req.body.userGenres[i].id, req.body.userGenres[i].like]
    queryText = `INSERT INTO "group_genres" ("id", "group_id", "genre_id", "like") VALUES (DEFAULT, $1, $2, $3)`;
    pool.query(queryText, queryValues)
        .then(res.send('done'))
        .catch((err) => {
            console.log('Error completing POST group preferences query', err);
        });
    }
});

module.exports = router;