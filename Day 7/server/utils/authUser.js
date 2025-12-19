const jwt = require("jsonwebtoken")
const SECRET = require("./config")
const createResponse = require("./response")
function authenticateUser(req,res,next)
{
    if(req.url == "/users/sign-up" || req.url == "/users/sign-in")
    {
        next()
    }
    else
    {
        let token = req.headers.token
        if(!token)
        {
            res.send("Empty Token")
        }
        else
        {
            try{
                let payload = jwt.verify(token,SECRET)
                req.headers.uid = payload.uid
                req.headers.email = payload.email
                next() 
            }
            catch(ex)
            {
                res.send(createResponse("Token is invalid ...."))
            }
        }
    }
}

module.exports = authenticateUser