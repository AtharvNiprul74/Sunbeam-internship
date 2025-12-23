import React, { useState } from 'react'
import { loginUser } from '../services/userService'
import {useNavigate} from 'react-router'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    async function signin() {
        const data = await loginUser(email, password)
        if (data.status === "success") {
            navigate("/home")
        }
    }

    return (
        <div className='container w-50'>
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
                Don't have an account? then to register Click Here
            </div>
        </div>
    )
}

export default Login
