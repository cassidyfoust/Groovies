const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {

});

/**
 * POST new users to database ("user_groups")
 */
router.post('/', (req, res) => {
    if (req.body.members !== undefined){
    let groupId = req.body.group_id
    let members = req.body.members
    members.forEach(member => {
        let queryText = ''
        let queryValues = [member, groupId]
        queryText = `INSERT INTO "user_group" ("user_id", "group_id") VALUES ($1, $2);`;
        console.log(queryText, queryValues)
        pool.query(queryText, queryValues)
            .then(() => { })
            .catch((err) => {
                console.log('Error completing ADD NEW USERS TO GROUP', err)
            })
    })
    }
});

// delete users from group

router.delete('/:deleteInfo', (req, res) => {
    console.log('the delete info is:', req.params.deleteInfo)
    let queryText = ''
    let queryValues = req.params.deleteInfo.split('-')
    queryText = 'DELETE from "user_group" where "group_id" = $1 and "user_id" = $2;';
    console.log('delete user query:', queryText, queryValues)
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

router.put('/', (req, res) => {
    let groupId = req.body.group_id
    let newGroupName = req.body.name
    let queryText = ''
    let queryValues = [newGroupName, groupId]
    if (newGroupname !== ''){
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