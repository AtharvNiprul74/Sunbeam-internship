const express = require("express")
const app = express()
const userRouter = require("./Routes/user")
const authenticateUser = require("./utils/authUser")

app.use(express.json())
app.use(authenticateUser)
app.use("/users",userRouter)

app.listen(4000,()=>{
    console.log("Server started listening on port 4000 ......")
})