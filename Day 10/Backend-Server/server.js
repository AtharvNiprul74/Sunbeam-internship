const express = require("express");

const userRouter = require("./Routes/user");
// const { authUser, checkAuthorization } = require("./Utils/userAuth");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use("/user",userRouter);

app.listen(4000, "localhost", () => {
  console.log("Server is running on 4000");
});
