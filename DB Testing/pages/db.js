const mySql = require("mysql2");
//const mySql = require("mysql");   -- getting error if I am using it.  --> npm install mysql2
const { mysqlConfig } = require("../playwright.config");

const connection = mySql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
