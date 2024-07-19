const { test, expect } = require("@playwright/test");
const mySql = require("mysql2");
const { mysqlConfig } = require("../playwright.config");
let connection = mySql.createConnection(mysqlConfig);

test.beforeAll("setup", async () => {
  //console.log(mysqlConfig); // Access MySQL configuration

  //let connection = mySql.createConnection(mysqlConfig);
  connection.connect((err) => {
    if (err) {
      console.log("Unable to connect to the database.. ", err);
    }
    console.log("Connected to the database successfully...");
  });
});

test.afterAll("teardown", async () => {
  if (connection != null) {
    connection.end();
    console.log("Connection ended...");
  }
});

test("Query MySQL Database", async ({ page }) => {
  const query = "SELECT * FROM Credentials";
  console.log("executing the query");
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error("Error executing query:", err);
    }
    console.log("Data received from MySQL:");
    console.log(rows);
    console.log("Fields ---->", fields); // returns an array of column names along with it data types
    fields.forEach((field) => console.log(field.name));
    rows.forEach((row, i) => console.log(i + 1, "------>", row));
  });
});
