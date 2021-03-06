// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var preFriendsArray = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/", function(req, res) {
        res.json(preFriendsArray);
    });
    app.get("/api/survey", function(req, res) {
        res.json(preFriendsArray);
    });
    app.get("/api/friends", function(req, res) {
        res.json(preFriendsArray);

    });
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the surveyData array)
    // ---------------------------------------------------------------------------
    app.post("/api/survey", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware

        res.push(req);
        console.log(preFriendsArray);

    });
    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        surveyData = [];
        prePopFriendData = [];
        console.log(surveyData);
    });

    app.post("/", function(req, res) {
        console.log("Working + normal ")
    });

    app.post("/api/friends", function(req, res) {
        preFriendsArray.push(req.body);
        res.json(preFriendsArray);

    });
};