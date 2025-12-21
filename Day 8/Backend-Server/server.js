const express = require("express")
const app = express()
const adminRouter = require("./Routes/Admin")
const publicRouter = require("./Routes/Public")
const studentRouter = require("./Routes/Students")


app.use(express.json())
app.use("/admin",adminRouter)
app.use("/public",publicRouter)
app.use("/students",studentRouter)


app.listen(4000,()=>{
    console.log("Server started on port 4000 .......")
})

