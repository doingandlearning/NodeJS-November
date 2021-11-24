require("dotenv").config();
const express = require("express");
const customerRoutes = require("./routes/customers.routes.js");

const app = express();

app.use(express.json());

app.use("/api/customers", customerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

// const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASS,
//   database: process.env.MYSQL_DB,
// });

// const pool = mysql.createPool({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASS,
//   database: process.env.MYSQL_DB,
//   connectionLimit: 10,
//   queueLimit: 0,
//   acquireTimeout: 10000,
//   waitForConnections: true,
// });

// pool.getConnection(function (err) {
//   if (err) throw err;
//   console.log("Connected");
//   const sql = `SHOW TABLES;`;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// });
