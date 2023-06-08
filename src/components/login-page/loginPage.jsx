import React, { useState } from "react";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import handleLoginOrSignup from "../../api/loginSignupApi";


function LoginPage() {
    const navigate = useNavigate()
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const takeUsername = (e) =>{
    let usernameInput = e.target.value
    setUsername(usernameInput)
   }

   const takePassword = (e) =>{
    let passwordInput = e.target.value
    setPassword(passwordInput)
   }

   const submit =async  () => {
    await handleLoginOrSignup(username, password, true)
    navigate('/notes')
    
   } 

    return (
        <div className="main-container-for-login">
            <div className="login-container">
                <div className="login-wrapper">
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <div className="wrap-input">
                        <input classname="email-input" type="text" name="username" placeholder="Username" onChange={(e)=>takeUsername(e)}/>
                    </div>
                    <div className="wrap-input">
                        <input classname="email-input" type="password" name="password" placeholder="Password" onChange={e=>takePassword(e)}/>
                    </div>
                    <div className="login-button-container">
                        <button className="login-button" onClick={submit}>
                            LOGIN
                        </button>
                    </div>
                    <div className="msg-to-signup">
                        <span className="txt1">Don't have an account? </span>
                        <Link to='/signup'>Sign up</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;