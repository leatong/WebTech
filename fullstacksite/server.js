// Create express app
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var fs = require('fs');
var key = fs.readFileSync('./certsFiles/selfsigned.key');
var cert = fs.readFileSync('./certsFiles/selfsigned.crt');

// API Routes
var subsRoutes = require('./routes/subs');
var productsRoutes = require('./routes/products');
var tourRoutes = require('./routes/tour');
var orderRoutes = require('./routes/orders');

// Start server.
var port = process.env.PORT || 3001; // Used by Heroku and http on localhost
const httpsPort = process.env.PORT || 4000; // Used by https on localhost

var credentials = {
    key: key,
    cert: cert
};

http.createServer(app).listen(port, function (){
    console.log("Server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// Run https server if on localhost
if (process.env.NODE_ENV != 'production') {
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(httpsPort, () => {
        console.log(`Https server at: https://localhost:${httpsPort}/`);
    });
}

// Express only serves static assets in production
if (process.env.NODE_ENV == "production") {
    console.log("Production mode");
    app.use(express.static(path.join(__dirname, 'client/build')));
} else {
    app.use(function (req, res, next) {
        res.setHeader('Strict-Transport-Security', 'max-age=8640000; includeSubDomains');
        if (!req.secure) {
            return res.redirect(301, 'https://' + req.host  + ":" + process.env.PORT + req.url);
        } else {
            return next();
        }
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Root route");
});

app.use('/api/subs', subsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/tour', tourRoutes);
app.use('/api/orders', orderRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});
app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
  });

