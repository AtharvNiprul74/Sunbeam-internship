const jwt = require("jsonwebtoken")
const SECRET = require("./config")

function authenticationUser(req,res,next)
{
    let token = req.headers.token
    if(!token)
    {
        return res.send("Token is missing .....")
    }
    try{
        const payload = jwt.verify(token,SECRET)

        req.user = {
            email:payload.email,
            role:payload.role
        }

        return next()
    }catch(ex)
    {
        return res.send("Invalid Token ....")
    }
}

module.exports = authenticationUser