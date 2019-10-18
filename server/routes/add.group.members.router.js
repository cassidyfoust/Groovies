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
    console.log(req.body[0])
    let groupId = req.body[0].group_id
    let members = req.body[0].members
    console.log('the group id is:', groupId, 'the members are:', members)
    members.forEach(member => {
    let queryText = ''
    let queryValues = [member, groupId]
    queryText = `INSERT INTO "user_group" ("user_id", "group_id") VALUES ($1, $2);`;
    console.log(queryText, queryValues)
    pool.query(queryText, queryValues)
        .then(() => { })
        .catch((err) => {
            console.log('Error completing ADD NEW USERS TO GROUP', err)})
    })
   
});

module.exports = router;