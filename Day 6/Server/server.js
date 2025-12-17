const express = require("express")
const app = express()
const studentsRouter = require("./Routes/students")

app.use(express.json())
app.use("/students",studentsRouter)

app.listen(4000,() => {
    console.log("Server Start listening on port 4000 .......")
})