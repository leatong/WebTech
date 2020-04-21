var sqlite = require('sqlite');
const dbMeta = require('./dbSchema');
var db;

create();

async function create() {
    try {
        db = await sqlite.open("./data.db");
        await db.run("PRAGMA foreign_keys = ON");
        await db.exec(dbMeta.dbSchema);
        await db.run("INSERT INTO Subscribers VALUES ('user1@gmail.com')");
        await db.run("INSERT INTO Subscribers VALUES ('user2@gmail.com')");
        console.log(await db.all("SELECT * FROM Subscribers"));
    } catch(err) { console.log(err); }
}