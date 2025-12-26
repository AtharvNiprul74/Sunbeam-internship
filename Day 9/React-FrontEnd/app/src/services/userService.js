import axios from 'axios'

export async function loginUser(email,password)
{
    const url = "http://localhost:4000/user/login"
    const body = {email,password} 
    const result = await axios.post(url,body)
    return result.data
}

export async function registerUser(name,email,password,mobileNo)
{
    const URL = "http://localhost:4000/user/register"
    const body = {name,email,password,mobileNo}
    const result = await axios.post(URL,body)
    console.log(result)
    return result.data
}