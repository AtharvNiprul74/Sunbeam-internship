const express = require("express")
const router = express.Router()
const pool = require("../Database/db")
const createResponse = require("../Utils/Response")

router.post("/login",(req,res) => {
    const {email,password} = req.body
    let sql = "Select * from user_reg where email = ? and password = ?"
    pool.query(sql,[email,password],(error,data) => {
        res.send(createResponse(error,data))
    })
})

router.post("/register",(req,res) => {
    const {name,email,password,mobileNo} = req.body
    let sql = "Insert into user_reg values(?,?,?,?)"
    pool.query(sql,[name,email,password,mobileNo],(error,data) => {
        res.send(createResponse(error,data))
    })
})

module.exports = router