var path = require('path');

var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        // var bestMatch = whatever function is created to match users
        // return res.json(bestMatch);
    })
}

//create a function that calculates how the users match up
// reduce userScore to a single sum
// reduce possible friends score to a single sum (needs to be in a for loop)