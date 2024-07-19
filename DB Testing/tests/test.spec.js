const { test } = require("@playwright/test");
const { mysqlConfig } = require("../playwright.config");
const db = require("../pages/db");

test("Query MySQL Database", async ({ page }) => {
  //console.log(mysqlConfig); // Access MySQL configuration

  const query = "SELECT * FROM Credentials";
  db.query(query, (err, rows) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("Data received from MySQL:");
    console.log(rows);
  });
});
