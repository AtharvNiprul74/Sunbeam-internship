const express = require("express")
const router = express.Router()
const pool = require("../Database/db") 
const createResponse = require("../Utils/Response")
 
// login user
router.post("/auth/login",(req,res) => {
    const {email,password} = req.body

    let sql = "Select * from users where email = ? and password = ?"

    pool.query(sql,[email,password],(error,data) => {
        res.send(createResponse(error,data))
    })
})

// get all active courses
router.get("/courses/all-active-courses",(req,res) => { //logic may be wrong from database
    let sql = "Select * from courses where start_date > CURDATE()"

    pool.query(sql,(error,data) => {
        res.send(createResponse(error,data))
    })
})

module.exports = router