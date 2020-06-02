module.exports.dbSchema = `
    CREATE TABLE IF NOT EXISTS Subscribers (
        subs_id INTEGER PRIMARY KEY,
        subs_email TEXT NOT NULL UNIQUE
    );
    CREATE TABLE IF NOT EXISTS Products (
        product_id INTEGER PRIMARY KEY,
        product_name TEXT NOT NULL,
        product_price INTEGER NOT NULL,
        product_desc TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Customers (
        cust_id INTEGER PRIAMRY KEY,
        cust_firstname TEXT NOT NULL,
        cust_lastname TEXT NOT NULL,
        cust_email TEXT NOT NULL,
        cust_phone INTEGER
    );
    CREATE TABLE IF NOT EXISTS Addresses (
        addr_id INTEGER PRIMARY KEY,
        addr_line_1 TEXT NOT NULL,
        addr_line_2 TEXT,
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
        order_id INTEGER PRIMARY KEY,
        cust_id INTEGER NOT NULL,
        FOREIGN KEY(cust_id) REFERENCES Customers(cust_id)
    );
    CREATE TABLE IF NOT EXISTS Order_Items (
        id INTEGER PRIMARY KEY,
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY(order_id) REFERENCES Cust_Orders(order_id),
        FOREIGN KEY(product_id) REFERENCES Products(product_id)
    );
    `