const express = require("express");
const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const pool = require("../Database/db");
const result = require("../Utils/result");
const config = require("../Utils/config");
const { authUser,checkAuthorization } = require("../Utils/userAuth");

const router = express.Router();

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = cryptojs.SHA256(password).toString();
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  pool.query(sql, [email, hashedPassword], (error, data) => {
    if (error) res.send(result.createResult(error));
    else if (data.length == 0)
      res.send(result.createResult("Invalid email or password"));
    else {
      const user = data[0];

      // create the JWT token
      // inside the payload store the data that needs to be encryted into the token
      const payload = {
        email: user.email
      };
      console.log(payload)
      const token = jwt.sign(payload, config.SECRET);
      const userData = {
        name: user.name,
        mobile: user.mobile,
        token,
      };
      res.send(result.createResult(null, userData));
    }
  });
});

router.post("/signup",(req,res) => {
    const {name,email,password,mobileNo} = req.body
    let hashedPassword = cryptojs.SHA256(password).toString()
    let sql = "Insert into users(name,email,password,mobile) values(?,?,?,?)"
    pool.query(sql,[name,email,hashedPassword,mobileNo],(error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.get("/getprofile",authUser,(req,res) => {
  const email = req.user
  const sql = "Select name,email,mobile from users where email = ?"
  pool.query(sql,[email],(error,data) => {
    res.send(result.createResult(error,data))
  })
})

// // get details by email (student)
// router.get("/", (req, res) => {
//   const email = req.headers.email;
//   const sql = `SELECT * FROM users WHERE email = ?`;
//   pool.query(sql, [email], (error, data) => {
//     res.send(result.createResult(error, data));
//   });
// });

// // get all students (admin)
// router.get("/all-students", checkAuthorization, (req, res) => {
//   // const email = req.headers.email;
//   const sql = `SELECT * FROM users`;
//   pool.query(sql, (error, data) => {
//     res.send(result.createResult(error, data));
//   });
// });

router.delete("/", (req, res) => {
  const uid = req.headers.uid;
  const sql = `DELETE FROM users WHERE uid = ?`;
  pool.query(sql, [uid], (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/stationery",(req,res) => {
  const sql = `Select * from items`
  pool.query(sql,(error,data) => {
    res.send(result.createResult(error,data))
  })
})

module.exports = router;
