const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route
 */
router.get('/:name', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT "group".id FROM "group"
        WHERE "group_name"=$1;`
    pool.query(queryText, [req.params.name])
        .then((result) => { 
            res.send(result.rows); })
        .catch((err) => {
            console.log('Error completing GET NEW GROUP ID query', err);
            res.sendStatus(500);
        });
});

module.exports = router;