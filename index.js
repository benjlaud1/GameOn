// Requires
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

// Define Port
const port = process.env.PORT || 3999;

// Middleware
app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get('/hot', function(req, res){
    request('https://bgg-json.azurewebsites.net/hot', function(err, resp, body){
        if (!err && resp.statusCode == 200) {
            res.send(body);
        } else {
            res.status(500);
        }
    })
});

// Route to index
app.get('/*', function(req, res){
    console.log('Base URL hit');
    res.sendFile(__dirname + '/public/index.html');
});

// Spin up server
app.listen(port, function () {
    console.log('Game On started and listening on port:', port);
}); // end listen