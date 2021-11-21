// const mysql = require('mysql');

require('dotenv').config();

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to test application application." });
});

require("./routes/customers.routes.js")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const con = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASS,
//     database: process.env.MYSQL_DB
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "CREATE TABLE customers (id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), createdAt TIMESTAMP, updatedAt TIMESTAMP, PRIMARY KEY (id))";
//     con.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log("Table created")
//     })
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "INSERT INTO customers (name, address) VALUES ('Acme Inc', 'Main Street')";
//     con.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log("1 record inserted")
//     })
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "SELECT * FROM customers";
//     con.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log(result)
//     })
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "SELECT name FROM customers";
//     con.query(sql, function(err, result) {
//         if(err) throw err;
//         console.log(result)
//         console.log(result[0].name)
//     })
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "SELECT * FROM customers";
//     con.query(sql, function(err, result, fields) {
//         if(err) throw err;
//         console.log(fields.map(field => field.name))
//     })
// })

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("Connected");
//     const sql = "SELECT * FROM customers WHERE name = 'Acme Inc'";
//     con.query(sql, function(err, result, fields) {
//         if(err) throw err;
//         console.log(result)
//     })
// })