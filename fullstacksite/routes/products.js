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
           var products = await db.all(
               "SELECT P.*, Product_Pics.picture " +
                "FROM Products AS P " +
                "INNER JOIN Product_Pics ON Product_Pics.product_id = P.id " +
                "GROUP BY P.id");
           await db.close();
           return products;
       } catch(err) { console.log(err); }
   }
});

router.get('/:productId(\\d+)?', function(req, res){
    getProduct()
    .then(function(subs){
        res.json(subs);
    })
    .catch(function(err){
        res.send(err);
    })
    async function getProduct() {
        try {
            db = await sqlite.open(path.join(__dirname, "../db/data.db"));
            var productId = await req.params.productId;
            var query = "SELECT P.*, Product_Pics.picture " +
                        "FROM Products AS P " + 
                        "INNER JOIN Product_Pics ON Product_Pics.product_id = P.id " +
                        "WHERE P.id = ?";
            var ps = await db.all(query, productId);
            await db.close();
            return ps;
        } catch(err) { console.log(err); }
    }
 });

module.exports = router;
