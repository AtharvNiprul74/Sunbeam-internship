const express = require("express")
const router = express.Router()
const pool = require("../Database/db") 
const createResponse = require("../Utils/Response")
const crypto_js = require("crypto-js")
const jwt = require("jsonwebtoken")
const SECRET = require("../Utils/config")

// to register student
router.post("/student/register-to-course",(req,res) => {
    const {courseId,email,name,mobileNo} = req.body

    let checkEmail = "Select * from users where email = ?"
    
    pool.query(checkEmail,[email],(error,data) => {
        if(data[0])
        {
            let sql = "Insert Into students(name,email,course_id,mobile_no) values (?,?,?,?)"

            pool.query(sql,[name,email,courseId,mobileNo],(error,data) => {
                res.send(createResponse(error,data))
            })
        }

        else
        {
            let password = crypto_js.SHA256("Sunbeam").toString()
            let role="Student"
            let insertEmail = "Insert into users values (?,?,?)"
            pool.query(insertEmail,[email,password,role],(error,data) => {
            
                let sql = "Insert Into students(name,email,course_id,mobile_no) values (?,?,?,?)"

                pool.query(sql,[name,email,courseId,mobileNo],(error,data) => {
                    res.send(createResponse(error,data))
                }) 
            })
        }
    })

})

// login user
router.post("/auth/login",(req,res) => {
    const {email,password} = req.body

    let hashedPassword = crypto_js.SHA256(password).toString()

    let sql = "Select * from users where email = ? and password = ?"

    pool.query(sql,[email,hashedPassword],(error,data) => {
        try 
        {
        
            let payload = {
                email:data[0].email,
                role:data[0].role
            }

            let token = jwt.sign(payload,SECRET)

            let newResponse = {
                email:data[0].email,
                token:token
            }
            
            console.log(token)

            res.send(createResponse(error,newResponse))

        }catch(ex)
        {
            res.send("Error in token")
        }
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