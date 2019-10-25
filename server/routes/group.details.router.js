const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET group details route
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "group_name", "group".id, "user".username, "group".admin FROM "user"
        JOIN "user_group" ON "user".id = "user_group".user_id
        JOIN "group" ON "group".id = "user_group".group_id
        WHERE "group".id=$1;`
    pool.query(queryText, [req.params.id])
        .then((result) => { res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing USER GROUPS query', err);
            res.sendStatus(500);
        });
});

module.exports = router;