const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log('in the get for group preferences')
const queryText = `SELECT "genre_name", "genre_id", "group_genres".id, "like" FROM "group"
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
    // for (let i = 0; i < req.body.length; i++) {
    //     let queryText = ''
    //     let queryValues = [req.body[i].group_id, req.body[i].genre_id, req.body[i].like]
    //     queryText = `INSERT INTO "group_genres" ("id", "group_id", "genre_id", "like") VALUES (DEFAULT, $1, $2, $3)`;
    //     console.log(queryText, queryValues)
    //     pool.query(queryText, queryValues)
    //         .then(() => { console.log('done') })
    //         .catch((err) => {
    //             console.log('Error completing POST group preferences query', err);
    //         });
    // }
});

router.delete('/:deleteInfo', (req, res) => {
    console.log(req.params.deleteInfo)
    let queryText = ''
    let queryValues = req.params.deleteInfo.split('-')
    queryText = 'DELETE from "group_genres" where "group_id" = $1 and "id" = $2;';
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE movie genre query', err);
            res.sendStatus(500);
        });
});

module.exports = router;