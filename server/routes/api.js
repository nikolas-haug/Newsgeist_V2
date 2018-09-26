const express = require("express");
const router = express.Router();
const axios = require("axios");

// variables for the news api call
const newsKEY = process.env.NEWSGEIST_APP_API_KEY;

router.get('/api/news/:search_term', function(req, res) {
    axios.get(`https://newsapi.org/v2/everything?q=${req.params.search_term}&pageSize=20&sources=al-jazeera-english,bbc-news,cnn,fortune,fox-news,msnbc,rt,the-economist,the-new-york-times,the-wall-street-journal,the-washington-post,vice-news,time,the-huffington-post,reuters,wired,the-american-conservative,the-hill,new-scientist,national-review&apiKey=${newsKEY}`)
        .then((response) => {
            res.json(response.data);
            // console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
        // check the connection from client to server sides
        console.log("api route connected!");
});

module.exports = router;