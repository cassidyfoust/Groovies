const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST user likes to database ("user_genres")
 */
router.post('/', (req, res) => {
    console.log(req.body)
    let queryText = ''
    let queryValues = [req.body.user_id, req.body.genre_id]
    queryText = `INSERT INTO "user_genres" ("id", "user_id", "genre_id", "like") VALUES(DEFAULT, $1, $2, true)`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE user liked genres query', err);
            res.sendStatus(500);
        });
});

module.exports = router;