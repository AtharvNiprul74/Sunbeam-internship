const express = require("express")
const app = express()
const userRouter = require("./Routes/user")

app.use(express.json())

app.use((req,res,next) => {
   if(req.url == "/users/sign-up" || req.url == "/users/sign-in")
   {
     next()
   }
   else
   {
    res.send("Authenticate first .... ")
   }
})

app.use("/users",userRouter)

app.listen(4000,()=>{
    console.log("Server started listening on port 4000 ......")
})