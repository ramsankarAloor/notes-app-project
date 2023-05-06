import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

function LoginPage() {

    return (
        <div className="main-container-for-login">
            <div className="login-container">
                <div className="login-wrapper">
                    <div>
                        <h1>Welcome</h1>
                    </div>
                    <div className="wrap-input">
                        <input classname="email-input" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="wrap-input">
                        <input classname="email-input" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="login-button-container">
                        <button className="login-button">
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