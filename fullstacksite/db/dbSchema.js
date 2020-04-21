module.exports.dbSchema = `CREATE TABLE IF NOT EXISTS Subscribers (
    email text NOT NULL UNIQUE PRIMARY KEY
);`