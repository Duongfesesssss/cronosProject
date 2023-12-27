/* string connect nodejs sqlserver
 */

const mssql = require("mssql");

const SQL_DRIVER = "SQL Server";
const SQL_SERVER = "MSI";
const SQL_DATABASE = "node";
const SQL_UID = "sa";
const SQL_PWD = "123";

const config = {
  driver: SQL_DRIVER,
  server: SQL_SERVER,
  database: SQL_DATABASE,
  user: SQL_UID,
  password: SQL_PWD,
  options: {
    encrypt: false,
    enableArithAbort: false,
  },
  connectionTimeout: 300000,
  requestTimeout: 300000,
  pool: {
    idleTimeoutMillis: 300000,
    max: 100,
  },
};

const pool = new mssql.ConnectionPool(config);

module.exports = {
  pool,
};



async function connectToDatabase() {
  try {
    await pool.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

connectToDatabase();
