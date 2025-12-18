function createResponse(error,data){
    let res = {}
    if(error)
    {
        res.status = "Failure",
        res.error = error
    }
    else
    {
        res.status = "Success",
        res.data = data
    }

    return res
}

module.exports = createResponse
