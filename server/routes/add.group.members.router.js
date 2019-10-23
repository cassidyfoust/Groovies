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
    let groupId = req.body.group_id
    let members = req.body.members
    members.forEach(member => {
    let queryText = ''
    let queryValues = [member, groupId]
    queryText = `INSERT INTO "user_group" ("user_id", "group_id") VALUES ($1, $2);`;
    pool.query(queryText, queryValues)
        .then(() => { })
        .catch((err) => {
            console.log('Error completing ADD NEW USERS TO GROUP', err)})
    })
   
});

module.exports = router;