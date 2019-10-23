const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

// get random movie from selected genre

router.get('/:id', (req, res) => {
    let randomPageNumber = Math.floor((Math.random() * 50) + 1);
    let randomMovieNumber = Math.floor((Math.random() * 20) + 1)
    let endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${randomPageNumber}&with_genres=${req.params.id}&language=en-US`
    axios({
        method: 'GET',
        url: endpoint
    })
        .then((response) => {
            res.send(response.data.results[randomMovieNumber])
        })
        .catch(error => {
            console.log('error:', error)
        })
})

module.exports = router;