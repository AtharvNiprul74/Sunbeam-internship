import React, { useState } from 'react'
import { loginUser } from '../services/userService'
import {useNavigate,Link} from 'react-router'
import {toast} from 'react-toastify'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signin = async function(){

        if(email === "")
        {
            toast.warn("Enter Email First")
            return
        }
        if(password === "")
        {
            toast.warn("Enter Password ")
            return
        }

        const data = await loginUser(email, password)

        if (data.status === "success") {
            console.log(data.data.name)
            toast.success("Logged in")
            navigate("/home")
        }
    }

    return (
        <div className='container card mt-5 p-3 '>
            <p className='text-center mt-1' id = 'title'>User Login</p>
            <div className=" mt-3 mb-3">
                <label for="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label for="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e => { setPassword(e.target.value) }} />
            </div>

            <div className="mb-3">
                <button className="btn btn-success" onClick={signin} type='button'>Sign in</button>
            </div>

            <div>
                Don't have an account? then to register <Link to ="/register">Click Here</Link> 
            </div>
        </div>
    )
}

export default Login
