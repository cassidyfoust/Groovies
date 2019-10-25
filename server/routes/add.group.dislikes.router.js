const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * POST new group dislikes to database ("group_genres")
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    req.body.genre_id.forEach(genre => {
        let queryText = ''
        let queryValues = [req.body.group_id, genre]
        queryText = `INSERT INTO "group_genres" ("id", "group_id", "genre_id", "like") VALUES (DEFAULT, $1, $2, false)`;
        pool.query(queryText, queryValues)
            .then(() => { res.sendStatus(200); })
            .catch((err) => {
                console.log('Error completing UPDATE group disliked genres query', err);
                res.sendStatus(500);
            });
    })
});

module.exports = router;