const express = require("express");
const router = express.Router();
const { pool } = require("../database/dbinfo");

/* get all data */
/* define api get, post, patch, put, delete */
/* async await */



router.get("/connect", async (req, res) => {
  try {
    await pool.connect();
    const result = await pool.request().query("select * from testApi");
    const test = result.recordset;
    console.log(test);
    res.json(test);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
