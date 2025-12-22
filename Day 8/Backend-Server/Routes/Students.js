const express = require("express")
const router = express.Router()
const pool = require("../Database/db")
const createResponse = require("../Utils/Response")
const crypto_js = require("crypto-js")

//change password
router.put("/student/change-password",(req,res) => {
 const email = req.user.email
 const {newPassword,confirmPassword} = req.body

 if(newPassword !== confirmPassword)
 {
    res.send("Password not matched ....")
    return
 }

 hashedPassword = crypto_js.SHA256(newPassword).toString()

 let sql = "Update users SET password = ? where email = ? "

 pool.query(sql,[hashedPassword,email],(error,data) => {
  res.send(createResponse(error,data))
 })
})

// get all registrated course of student
router.get("/student/my-courses",(req,res) => {
    const email = req.user.email
    
    let sql = "Select c.* from students s Inner Join courses c on s.course_id = c.course_id where s.email = ?"
    
    pool.query(sql,[email],(error,data) => {
        res.send(createResponse(error,data))
    })
})

// get all with videos
router.get("/student/my-courses-with-videos",(req,res) => {
    const email = req.user.email

    let sql = "Select c.*,v.title,v.description,v.youtube_url,v.added_at from students s Inner Join courses c on s.course_id = c.course_id Inner join videos v on c.course_id = v.course_id where s.email = ?"

    pool.query(sql,[email],(error,data) => {
        res.send(createResponse(error,data))
    })
})

module.exports = router