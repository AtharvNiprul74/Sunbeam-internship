const express = require("express")
const router = express.Router()
const pool = require("../database/db")
const cryptojs = require("crypto-js")
const createResponse = require("../utils/response")
const jwt = require("jsonwebtoken")
const SECRET = require("../utils/config")

router.post("/sign-up",(req,res) => {
    let {name,email,password,mobile} = req.body
    let hashedPass = cryptojs.SHA256(password).toString()
    let sql = "Insert into users(name,email,password,mobile) values(?,?,?,?)"
    pool.query(sql,[name,email,hashedPass,mobile],(error,data) => {
        res.send(createResponse(error,data))
    })
})

router.post("/sign-in",(req,res) => {
    let {email,password} = req.body
    let hashedPassword = cryptojs.SHA256(password).toString()
    let sql = "Select * from users where email = ? and password = ?"
    pool.query(sql,[email,hashedPassword],(error,data) => {
        if(error)
            res.send(createResponse(error,data))
        else if(data.length == 0)
        {
            res.send("Invalid Email and Password ..")
        }
        else
        {
            let user = data[0]
            let payload = { 
                uid:user.uid,
                email:user.email
            }
            let token = jwt.sign(payload,SECRET)
            let newRes = {
                name:user.name,
                mobile:user.mobile,
                token:token
            }
            res.send(createResponse(null,newRes))
        }
    })
})

router.get("/",(req,res) => {
    let email = req.headers.email
    let sql = "Select * from users where email = ?"
    pool.query(sql,[email],(error,data) => {
        res.send(createResponse(error,data))
    })
})

router.delete("/",(req,res) => {
    let uid = req.headers.uid
    let sql = "Delete from users where uid = ?"
    pool.query(sql,[uid],(error,data) => {
        res.send(createResponse(error,data))
    })
})

module.exports = router