var express = require('express');
var router = express.Router();
var sqlite = require('sqlite');
path = require('path');
var db;

router.get('/', function(req, res){
    getOrders()
    .then(function(subs){
        res.json(subs);
    })
    .catch(function(err){
        res.send(err);
    })
    async function getOrders() {
        try {
            db = await sqlite.open(path.join(__dirname, "../db/data.db"));
            var orders = await db.all(
                "SELECT CO.*, P.product_id, P.quantity FROM Cust_Orders AS CO " +
                "INNER JOIN Order_Items AS P ON CO.order_id = P.order_id"
            );
            await db.close();
            return orders;
        } catch(err) { console.log(err); }
    }
});

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
                  "WHERE Customers.id = ?", obj.phone, custId);
            }

            var addr = await db.run(
               "INSERT INTO Addresses (addr_line_1, city, postcode, country) " +
               "VALUES (?, ?, ?, ?)", obj.address1, obj.city, obj.postcode, obj.country
            );
            var addrId = addr.lastID;
            console.log("Address ID: " + addrId);
            if(obj.address2 != null) {
               await db.run("UPDATE Addresses SET addr_line_2 = ? " +
                  "WHERE Addresses.id = ?", obj.address2, addrId);
            }
            if(obj.address3 != null) {
               await db.run("UPDATE Addresses SET addr_line_3 = ? " +
                  "WHERE Addresses.id = ?", obj.address3, addrId);
            }
            await db.run(
               "INSERT INTO Cust_Addr (cust_id, addr_id) VALUES (?, ?)", custId, addrId
            );
            var order = await db.run(
                "INSERT INTO Cust_Orders (cust_id, date) VALUES (?, datetime('now', 'localtime'))", custId
            );
            var orderId = order.lastID;
            let products = obj.products;
            for (let i=0; i<products.length; i++) {
                await db.run(
                    "INSERT INTO Order_Items (order_id, product_id, quantity) " +
                    "VALUES (?, ?, ?)", orderId, products[i].id, products[i].count
                );
            }
            await db.close();
       } catch(err) { console.log(err); }
   }
});

module.exports = router;
