const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * POST new users to database ("user_groups")
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    if (req.body.members !== undefined){
    let groupId = req.body.group_id
    let members = req.body.members
    members.forEach(member => {
        let queryText = ''
        let queryValues = [member, groupId]
        queryText = `INSERT INTO "user_group" ("user_id", "group_id") VALUES ($1, $2);`;
        pool.query(queryText, queryValues)
            .then(() => { })
            .catch((err) => {
                console.log('Error completing ADD NEW USERS TO GROUP', err)
            })
    })
    }
});

// delete users from group

router.delete('/:deleteInfo', rejectUnauthenticated, (req, res) => {
    let queryText = ''
    let queryValues = req.params.deleteInfo.split('-')
    queryText = 'DELETE from "user_group" where "group_id" = $1 and "user_id" = $2;';
    if (queryValues[1] !== ''){
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE user from group query', err);
            res.sendStatus(500);
        });
    }
});

// update group name

router.put('/', rejectUnauthenticated, (req, res) => {
    let groupId = req.body.group_id
    let queryText = ''
    let queryValues = [req.body.name, groupId]
    if (req.body.name !== ''){
    queryText = 'UPDATE "group" SET "group_name" = $1 WHERE "id" = $2;';
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing EDIT GROUP NAME query', err);
            res.sendStatus(500);
        });
    }
});

module.exports = router;