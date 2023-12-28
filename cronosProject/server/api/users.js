const express = require("express");
const router = express.Router();
const { pool } = require("../database/dbinfo");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const verifyToken = require("../services/verify-token");



/* SET storage */
var storage = multer.diskStorage({
  destination: function (req, res, cb) {
    
    cb(null, "\\Users\\TCGAMING\\Desktop\\wow\\cronosProject\\cronosProject\\client\\static\\avatar");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });


// /* Get all users */
// router.get("/", async (req, res) => {
//   try {
//     await pool.connect();
//     const result = await pool
//       .request()
//       .query(`SELECT * FROM users`);
//     const users = result.recordset;

//     res.json(users);
//    // console.log(users);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// /* Get email */
// router.get("/findemail", async (req, res) => {
//   try {
//     await pool.connect();
//     const result = await pool
//       .request()
//       .input("email", req.query.email)
//       .query(`SELECT * FROM users WHERE email = @email`);
//     const email = result.recordset;
//     res.json(email);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// /* Get user by id */
// router.get("/:_id", async (req, res) => {
//   try {
//     await pool.connect();
//     const result = await pool
//       .request()
//       .input("_id", req.params._id)
//       .query(`SELECT * FROM users WHERE _id = @_id`);
//     const user = result.recordset[0];
//     if (!user) {
//       res.status(403).json({
//         success: false,
//         message: "Authenticate failed, not found user",
//       });
//     } else {
//       res.json(user);
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

/* Login user auth */
router.post("/auth/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    await pool.connect();
    const result = await pool
      .request()
      .input("email", email)
      .query(`SELECT * FROM users WHERE email = @email`);
    //  console.log(email);
    const user = result.recordset[0];
    if (!user) {
      res.status(403).json({
        success: false,
        message: "Authenticate failed, aaaaaaaaa",
      });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        let token = jwt.sign(user, process.env.SECRET, { expiresIn: "2 days" });
        res.json({ user, token });
       // console.log(user);
      } else {
        res.status(403).json({
          success: false,
          message: "Authenticate failed, wrong password",
        });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


/* Lấy 1 user auth */
router.get("/auth/user", verifyToken, async (req, res) => {
  console.log(req.decoded)
  //console.log(req.decoded.user)
  //console.log(req.decoded.user.email)
  const email = req.decoded.email;
  try {
    await pool.connect();
    const result = await pool
      .request()
      .input("email", email)
      .query(`select * from users where email=@email`);
    const user = result.recordset[0];
    if (!user) {
      res.status(403).json({
        success: false,
        message: "Authenticate failed, not found user!",
      });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});









/* Create user auth */
router.post("/account", upload.single("avatar"), async (req, res) => {
  // console.log(req.body);
  var password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, 10);

   let linkAvatar;
   const file = req.file;
   if (!file) {
     linkAvatar = req.body.avatar;
   } else {
     linkAvatar = `http://localhost:3000/avatar/${req.file.filename}`;
   }


   console.log(req.file.filename);
   console.log(req.file);
   console.log(encryptedPassword);

  try {
    await pool.connect();
    const result = await pool
      .request()
      .input("email", req.body.email)
      .input("username", req.body.username)
      .input("name", req.body.name)
      .input("password", encryptedPassword)
      .input("role", req.body.role)
      .input("createdBy", req.body.createdBy)
      .input("createdAt", req.body.updatedAt)
      .input("avatar", req.body.avatar)
      .query(`
                  INSERT INTO users (email, username, name, password, role, createdBy, createdAt, avatar) 
                  VALUES (@email, @username, @name, @password, @role, @createdBy, @createdAt, @avatar);
              `);
    const user = req.body;
   //  console.log(user);
    //console.log(user);
    let token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "2 days" });
   console.log(token);
    res.json({ user, token, message: "Create user success!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
