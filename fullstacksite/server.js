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
var tourRoutes = require('./routes/tour');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(("client/build")));
}

var httpsServer = https.createServer(credentials, app);

app.get('/', (req, res) => {
    res.send("Root route");
});

app.use('/api/subs', subsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/tour', tourRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});
app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
  });

httpsServer.listen(httpsPort, () => {
    console.log(`Https server at: https://localhost:${httpsPort}/`);
});
