const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * POST user likes to database ("user_genres")
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    req.body.genre_id.forEach(genre => {
    let queryText = ''
    let queryValues = [req.body.user_id, genre]
    queryText = `INSERT INTO "user_genres" ("id", "user_id", "genre_id", "like") VALUES(DEFAULT, $1, $2, true)`;
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE user liked genres query', err);
            res.sendStatus(500);
        });
    })
});

module.exports = router;