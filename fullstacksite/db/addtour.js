var sqlite = require('sqlite');
const dbMeta = require('./dbSchema');
var db;

create();

async function create() {
    try {
        db = await sqlite.open("./data.db");
        await db.run("PRAGMA foreign_keys = ON");
        await db.exec(dbMeta.dbSchema);
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('London', 'UK', '2020-09-14')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('Cambridge', 'UK', '2020-09-15')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('Bristol', 'UK', '2020-09-17')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('Edinburgh', 'UK', '2020-09-20')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('Glasgow', 'UK', '2020-09-25')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('New York', 'USA', '2020-10-01')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('New Orleans', 'USA', '2020-10-03')");
        await db.run("INSERT INTO Tour_Dates (city, country, date) VALUES ('Los Angeles', 'USA', '2020-09-05')");
        console.log(await db.all("SELECT * FROM Tour_Dates"));
        await db.close();
    } catch(err) { console.log(err); }
}