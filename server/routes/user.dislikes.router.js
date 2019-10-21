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
    req.body.genre_id.forEach(genre => {
    let queryText = ''
    let queryValues = [req.body.user_id, genre]
    queryText = `INSERT INTO "user_genres" ("id", "user_id", "genre_id", "like") VALUES(DEFAULT, $1, $2, false)`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE user disliked genres query', err);
            res.sendStatus(500);
        });
    })
});

module.exports = router;