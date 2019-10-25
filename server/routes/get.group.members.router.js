const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET route for group members at group id

router.get('/:id', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT "username" from "user"
    JOIN "user_group" ON "user".id = "user_group".user_id
    JOIN "group" ON "group".id = "user_group".group_id
    WHERE "group".id = $1;`
    pool.query(queryText, [req.params.id]).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
        .catch(error => {
            console.log('error searching users', error);
            res.sendStatus(500);
        });
});

module.exports = router;