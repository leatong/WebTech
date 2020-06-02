var express = require('express');
var router = express.Router();
var sqlite = require('sqlite');
path = require('path');
var db;

router.get('/', function(req, res){
   getProducts()
   .then(function(subs){
       res.json(subs);
   })
   .catch(function(err){
       res.send(err);
   })
   async function getProducts() {
       try {
           db = await sqlite.open(path.join(__dirname, "../db/data.db"));
           var products = await db.all("SELECT * FROM Products");
           return products;
       } catch(err) { console.log(err); }
   }
});

module.exports = router;
