const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

// get movie from search query

router.get('/:search', (req, res) => {
    let queryText = req.params.search
    let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${queryText}&original_language=en`
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            res.send(response.data)
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;