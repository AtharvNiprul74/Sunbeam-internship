const express = require("express")
const router = express.Router()
const pool = require("../Database/db")
const result = require("../Util/result")
const createResult = require("../Util/result")

router.get("/",(req,res) => {
    sql = "Select * from students"
    pool.query(sql,(error,data) => {
        res.send(createResult(error,data))
    })
})

router.post("/",(req,res) => {
    let {name,email,course} = req.body
    sql = "Insert into students values(?,?,?)"
    pool.query(sql,[name,email,course],(error,data) => {
        res.send(createResult(error,data))
    })
})

router.put("/",(req,res) => {
    let {name,email,course} = req.body  
    sql = "Update students set email=?,course=? where name=?"
    pool.query(sql,[email,course,name],(error,data) =>{
        res.send(createResult(error,data))
    })
})

router.delete("/",(req,res) => {
    let {email} = req.body
    sql = "Delete from students where email = ?"
    pool.query(sql,[email],(error,data) =>{
        res.send(createResult(error,data))
    })
})

module.exports = router