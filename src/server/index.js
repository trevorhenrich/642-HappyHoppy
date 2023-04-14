// const { dbConnection } = require('./database/connection');
// const { dbQuery } = require('./database/recipequery');

const express = require("express");
const mysql = require('mysql2');
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();

//start express server
const app = express();
app.use(cors());
const PORT = 3001;

//connect to database
const pool = mysql.createPool({
    host: process.env.mysqlhost,
    user: process.env.mysqluser,
    password: process.env.mysqlpassword,
    database: process.env.mysqldatabase,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

// test the MySQL connection
pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
  
    console.log("Connected to MySQL successfully!");
    connection.release();
  });

app.get("/api", (req, res) => {
     //res.json({ message: "Hello from server!" });
     

      pool.query('SELECT * FROM `recipes`', (err, rows) => {
        if (err) {
          console.error("Error executing SQL query:", err);
          res.status(500).send("Internal Server Error");
          return;
        }
    
        console.log(rows);
        res.send(rows);
      });


});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

