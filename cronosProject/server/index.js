/* trang chủ của backend api */

const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Trang chủ */
app.get("/", (req, res) => {
  res.send("🤖 Đây là backend server api");
});

/* Sử dụng các tuyến đường khác */
app.use("/api/testConnect", require("./api/testConnect"));
app.use("/api/users", require("./api/users"));


app.listen(process.env.PORT, () => {
  console.log(`Server đã bắt đầu chạy trên cổng ${process.env.PORT}`);
});
