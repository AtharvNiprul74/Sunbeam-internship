const jwt = require("jsonwebtoken");
const result = require("../Utils/result")
const config = require("../Utils/config")

function authUser(req, res, next) {
    const token = req.headers.token;
    console.log("token", token);

    if (!token) {
        res.send(result.createResult("Token is missing"));
        return
    }
    else {
        try {
            const payload = jwt.verify(token, config.SECRET);
            console.log("payload: ", payload.email);
            req.user = payload.email
            return next();
        } catch (ex) {
            console.log("ex", ex);
            return res.send(result.createResult("Token is Invalid"));
        }
    }

}

function checkAuthorization(req, res, next) {
    const role = req.headers.role;
    console.log("current user role: ", role);

    if (role === "admin") {
        return next();
    }
    return res.send(result.createResult("UnAuthorized Access!"));
}

module.exports = { authUser, checkAuthorization };
