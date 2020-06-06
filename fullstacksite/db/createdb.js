var sqlite = require('sqlite');
const dbMeta = require('./dbSchema');
var db;

create();

async function create() {
    try {
        db = await sqlite.open("./data.db");
        await db.run("PRAGMA foreign_keys = ON");
        await db.exec(dbMeta.dbSchema);
        await db.run("INSERT INTO Subscribers (subs_email) VALUES ('test1@gmail.com')");
        await db.run("INSERT INTO Subscribers (subs_email) VALUES ('test2@hotmail.com')");
        console.log(await db.all("SELECT * FROM Subscribers"));
        await db.run("INSERT INTO Products (name, price, description) VALUES ('Tangerine Rye White Tee', 15, 'Vintage white T-shirt with Tangerine Rye logo')");
        await db.run("INSERT INTO Products (name, price, description) VALUES ('La La Lemonade - Single', 0.99, 'The first ingredient in your jar of \"Sticky\", a summer-set love story laden with pop hooks, homaging Stax and Motown with sprinkles of contemporary Soul and RnB!')");
        await db.run("INSERT INTO Products (name, price, description) VALUES ('Honey - Single', 0.99, 'The second ingredient in your jar of \"Sticky\" is a lttle bit of HONEY! Fuzzed out bluesy garage rock meets classic Funk.')");
        await db.run("INSERT INTO Products (name, price, description) VALUES ('Tangerine Rye - Album', 2.99, 'Our first self-titled and self-released album! Filled with rock and roll passion.')");
        await db.run("INSERT INTO Products (name, price, description) VALUES ('Fake Merch Cat Tee', 15, 'Fake white T-shirt merchandise with a random home-made cat SVG logo!')");
        await db.run("INSERT INTO Products (name, price, description) VALUES ('Fake Merch Cat Cap', 10, 'Fake stylish red cap merchandise starring the random home-made cat SVG logo!')");
        console.log(await db.all("SELECT * FROM Products"));
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (1, 'Tshirt1-square.jpg')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (2, 'lalalemon.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (3, 'honey.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (4, 'album1.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (5, 'cat_whitetshirtfront.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (5, 'cat_whitetshirtback.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (6, 'cat_capfront.png')");
        await db.run("INSERT INTO Product_Pics (product_id, picture) VALUES (6, 'cat_capside.png')");
        console.log(await db.all("SELECT * FROM Product_Pics"));
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