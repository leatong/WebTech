var sqlite = require('sqlite');
const dbMeta = require('./dbSchema');
var db;

create();

async function create() {
    try {
        db = await sqlite.open("./data.db");
        await db.run("PRAGMA foreign_keys = ON");
        await db.exec(dbMeta.dbSchema);
        await db.run("INSERT INTO Subscribers (subs_email) VALUES ('user1@gmail.com'), ('user2@hotmail.com')");
        console.log(await db.all("SELECT * FROM Subscribers"));
        await db.run("INSERT INTO Products (product_name, product_price, product_desc) VALUES ('TR Logo T-shirt', 15, 'White T-shirt with Tangerine Rye logo')");
        console.log(await db.all("SELECT * FROM Products"));
    } catch(err) { console.log(err); }
}