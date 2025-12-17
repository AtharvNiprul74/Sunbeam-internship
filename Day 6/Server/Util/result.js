function createResult(err,data)
{
    const res = {}   
    if(err)
    {
        res.status="error",
        res.err = err
    }
    else
    {
        res.status="success",
        res.data=data
    }

    return res
}

module.exports = createResult