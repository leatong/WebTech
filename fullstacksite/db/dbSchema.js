module.exports.dbSchema = `
    CREATE TABLE IF NOT EXISTS Subscribers (
        subs_id INTEGER PRIMARY KEY NOT NULL,
        subs_email TEXT NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Product_Pics (
        id INTEGER PRIMARY KEY NOT NULL,
        product_id INTEGER NOT NULL,
        picture TEXT NOT NULL,
        FOREIGN KEY(product_id) REFERENCES Products(id)
    );
    CREATE TABLE IF NOT EXISTS Tour_Dates (
        id INTEGER PRIMARY KEY NOT NULL,
        city TEXT NOT NULL,
        country TEXT NOT NULL,
        date TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Customers (
        id INTEGER PRIMARY KEY NOT NULL,
        cust_firstname TEXT NOT NULL,
        cust_lastname TEXT NOT NULL,
        cust_email TEXT NOT NULL,
        cust_phone INTEGER NULL
    );
    CREATE TABLE IF NOT EXISTS Addresses (
        id INTEGER PRIMARY KEY NOT NULL,
        addr_line_1 TEXT NOT NULL,
        addr_line_2 TEXT,
        addr_line_3 TEXT,
        city TEXT NOT NULL,
        postcode TEXT NOT NULL,
        country TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Cust_Addr (
        cust_id INTEGER NOT NULL,
        addr_id INTEGER NOT NULL,
        PRIMARY KEY (cust_id, addr_id),
        FOREIGN KEY(cust_id) REFERENCES Customers(cust_id),
        FOREIGN KEY(addr_id) REFERENCES Addresses(addr_id)
    );
    CREATE TABLE IF NOT EXISTS Cust_Orders (
        order_id INTEGER PRIMARY KEY NOT NULL,
        cust_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        FOREIGN KEY(cust_id) REFERENCES Customers(cust_id)
    );
    CREATE TABLE IF NOT EXISTS Order_Items (
        id INTEGER PRIMARY KEY,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY(order_id) REFERENCES Cust_Orders(order_id),
        FOREIGN KEY(product_id) REFERENCES Products(id)
    );
    `