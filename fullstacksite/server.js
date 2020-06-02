// Create express app
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

const https = require('https');
const httpsPort = 3001;

const fs = require('fs');
var key = fs.readFileSync('./certsFiles/selfsigned.key');
var cert = fs.readFileSync('./certsFiles/selfsigned.crt');

var credentials = {
    key: key,
    cert: cert
};

var subsRoutes = require('./routes/subs');
var productsRoutes = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

var httpsServer = https.createServer(credentials, app);

app.get('/', (req, res) => {
    res.send("Root route");
});

app.use('/api/subs', subsRoutes);
app.use('/api/products', productsRoutes);

httpsServer.listen(httpsPort, () => {
    console.log(`Https server at: https://localhost:${httpsPort}/`);
});
