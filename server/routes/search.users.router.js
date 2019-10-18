const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // let searchTerm = `%${req.query.q}%`
    // if (req.query.q == undefined || req.query.q == "") {
    //     let queryText = 'SELECT * FROM "user" ORDER BY title;';
    //     pool.query(queryText).then(result => {
    //         // Sends back the results in an object
    //         res.send(result.rows);
    //     })
    //         .catch(error => {
    //             console.log('error searching users', error);
    //             res.sendStatus(500);
    //         });
    // }
    // else {
        let queryText = 'SELECT "id", "username" FROM "user" ORDER BY "username";';
        pool.query(queryText).then(result => {
            // Sends back the results in an object
            res.send(result.rows);
        })
            .catch(error => {
                console.log('error searching users', error);
                res.sendStatus(500);
            });
});

module.exports = router;