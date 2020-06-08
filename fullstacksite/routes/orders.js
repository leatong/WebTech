var express = require('express');
var router = express.Router();
var sqlite = require('sqlite');
path = require('path');
var db;

router.get('/customer', function(req, res){
   getCustomers()
   .then(function(subs){
       res.json(subs);
   })
   .catch(function(err){
       res.send(err);
   })
   async function getCustomers() {
       try {
           db = await sqlite.open(path.join(__dirname, "../db/data.db"));
           var customers = await db.all("SELECT * FROM Customers");
           await db.close();
           return customers;
       } catch(err) { console.log(err); }
   }
});

router.get('/address', function(req, res){
   getAddresses()
   .then(function(subs){
       res.json(subs);
   })
   .catch(function(err){
       res.send(err);
   })
   async function getAddresses() {
       try {
           db = await sqlite.open(path.join(__dirname, "../db/data.db"));
           var addresses = await db.all("SELECT * FROM Addresses");
           await db.close();
           return addresses;
       } catch(err) { console.log(err); }
   }
});


router.post('/createNewOrder', function(req, res){
   createNewOrder(req.body)
   .then(function(json){
       res.json(json);
   })
   .catch(function(err){
       res.send(err);
   })
   async function createNewOrder(json) {
       try {
            db = await sqlite.open(path.join(__dirname, "../db/data.db"));
            const obj = await JSON.parse(JSON.stringify(json));
            var cust = await db.run(
               "INSERT INTO Customers (cust_firstname, cust_lastname, cust_email) " + 
               "VALUES (?, ?, ?)", obj.firstName, obj.lastName, obj.email
            );
            var custId = cust.lastID;
            console.log("Customer ID: " + custId);
            if(obj.phone != null) {
               await db.run("UPDATE Customers SET cust_phone = ? " +
                  "WHERE Customers.cust_id = ?", obj.phone, custId);
            }

            var addr = await db.run(
               "INSERT INTO Addresses (addr_line_1, city, postcode, country) " +
               "VALUES (?, ?, ?, ?)", obj.address1, obj.city, obj.postcode, obj.country
            );
            var addrId = addr.lastID;
            console.log("Address ID: " + addrId);
            if(obj.address2 != null) {
               await db.run("UPDATE Addresses SET addr_line_2 = ? " +
                  "WHERE Addressess.id = ?", obj.address2, addrId);
            }
            if(obj.address3 != null) {
               await db.run("UPDATE Addresses SET addr_line_3 = ? " +
                  "WHERE Addressess.id = ?", obj.address3, addrId);
            }
            await db.run(
               "INSERT INTO Cust_Addr (cust_id, addr_id) VALUES (?, ?)", custId, addrId
            );

            
            await db.close();
       } catch(err) { console.log(err); }
   }
});

module.exports = router;
