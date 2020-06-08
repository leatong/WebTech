var express = require('express');
var router = express.Router();
var sqlite = require('sqlite');
path = require('path');
var db;

router.get('/', function(req, res){
   getTourDates()
   .then(function(subs){
       res.json(subs);
   })
   .catch(function(err){
       res.send(err);
   })
   async function getTourDates() {
       try {
           db = await sqlite.open(path.join(__dirname, "../db/data.db"));
           var tourDates = await db.all("SELECT * FROM Tour_Dates");
           await db.close();
           return tourDates;
       } catch(err) { console.log(err); }
   }
});

module.exports = router;
