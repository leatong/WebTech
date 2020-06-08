var express = require('express');
var router = express.Router();
var sqlite = require('sqlite');
path = require('path');
var db;

router.get('/', function(req, res){
    getSubs()
    .then(function(subs){
        res.json(subs);
    })
    .catch(function(err){
        res.send(err);
    })
    async function getSubs() {
        try {
            db = await sqlite.open(path.join(__dirname, "../db/data.db"));
            var subs = await db.all("SELECT * FROM Subscribers");
            await db.close();
            return subs;
        } catch(err) { console.log(err); }
    }
});

router.post('/', function(req, res){
    addSub(req.body)
    .then(function(addSub){
        res.json(addSub);
    })
    .catch(function(err){
        res.send(err);
    })
    async function addSub(sub) {
        try {
            db = await sqlite.open(path.join(__dirname, "../db/data.db"));
            var sql = await db.prepare("INSERT INTO Subscribers (subs_email) VALUES (?)");
            const obj = await JSON.parse(JSON.stringify(sub));
            await sql.run(obj.email);
            await sql.finalize();
            await db.close();
        } catch(err) { console.log(err); }
    }
});

module.exports = router;