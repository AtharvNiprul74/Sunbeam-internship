import axios from 'axios'

export async function loginUser(email,password)
{
    const url = "http://localhost:4000/public/auth/login"
    const body = {email,password} 
    const result = await axios.post(url,body)
    return result.data
}