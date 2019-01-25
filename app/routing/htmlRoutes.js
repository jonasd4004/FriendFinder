const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // res.send(Friend Finder home page)
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        // res.send(Survey Page)
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
}