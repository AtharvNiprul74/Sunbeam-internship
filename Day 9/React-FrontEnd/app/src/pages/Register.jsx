import React, { useState } from 'react'
import { registerUser } from '../services/userService'
import { useNavigate } from 'react-router'

function Register() {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[mobileNo,setmobile] = useState('')

    const navigate = useNavigate()

    async function sign_up()
    {
        const result = await registerUser(name,email,password,mobileNo)
        if(result.status === "success")
        {
            navigate("/")
        }
        else
        {
            console.log("data not found")
        }
    }

    return (
        <div className='container w-50 mt-5 card p-3'>
            <form>
                <p className='text-center mt-1' id = "title">User Register</p>
                <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter Name" onChange={event => setName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="inputMobileNo">Mobile No</label>
                    <input type="text" className="form-control" id="inputMobileNo" 
                    placeholder="Enter Mobile Number" onChange={e => setmobile(e.target.value)} />
                </div>

                <button type="button" className="btn btn-primary" onClick={sign_up}>Submit</button>
            </form>
        </div>
    )
}

export default Register
