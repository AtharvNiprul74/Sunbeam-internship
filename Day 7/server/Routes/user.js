const express = require("express")
const router = express.Router()
const pool = require("../database/db")
const cryptojs = require("crypto-js")

router.post("/sign-up",(req,res) => {
    let {name,email,password,mobile} = req.body
    let hashedPass = cryptojs.SHA256(password).toString()
    let sql = "Insert into users(name,email,password,mobile) values(?,?,?,?)"
    pool.query(sql,[name,email,hashedPass,mobile],(error,data) => {
        res.send(data)
    })
})

router.post("/sign-in",(req,res) => {
    let {email,password} = req.body
    let sql = "Select * from users where email = ? and password = ?"
    pool.query(sql,[email,password],(error,data) => {
        if(error)
            res.send(error)
        else if(data.length == 0)
            res.send("Invalid Email and Password ..")
        else
            //JWT
            res.send(data)
    })
})

router.get("/",(req,res) => {
    let {email} = req.query
    let sql = "Select * from users where email = ?"
    pool.query(sql,[email],(error,data) => {
        res.send(data)
    })
})

router.delete("/:uid",(req,res) => {
    let uid = req.params.uid
    let sql = "Delete from users where uid = ?"
    pool.query(sql,[uid],(error,data) => {
        res.send(data)
    })
})

module.exports = router