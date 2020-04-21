// Create express app
var express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require('body-parser');

var subsRoutes = require("./routes/subs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    res.send("Root route");
});

app.use('/api/subs', subsRoutes);

app.listen(port, () => {
    console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
});