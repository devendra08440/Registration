import React from "react";
import './style.css';
import logo from '../../Asset/logo.jpg';
import user from '../../Asset/user.png';
import email from '../../Asset/email.png';
import lock from '../../Asset/lock.png';
import key from '../../Asset/key.png';

const Registration = () => {
    return (
        <div className="container">
            <form action="">
                <h3>Sign up</h3>

                <div className="input-field">
                    <img src={user} alt="user-icon" />
                    <input type="text" placeholder="Your Name" name="name" id="name" />
                </div>

                <div className="input-field">
                    <img src={email} alt="email-icon" />
                    <input type="text" placeholder="Your Email" name="email" id="email" />
                </div>

                <div className="input-field">
                    <img src={lock} alt="lock-icon" />
                    <input type="password" placeholder="Password" name="password" id="password" />
                </div>

                <div className="input-field">
                    <img src={key} alt="key-icon" />
                    <input type="password" placeholder="Repeat your password" name="re-password" id="re-password" />
                </div>

                <div className="checkbox-field">
                    <input type="checkbox" id="terms" for="terms-statement"/><label id="terms-statement">I agree all statements in <a href="https://www.google.com">Terms of service</a><a/> </label>
                </div>

                <div className="button-field">
                    <button>Register</button>
                </div>
            </form>
            <div className="logo-image">
                <img src={logo} alt="logo-image" />
            </div>
        </div>
    )
}

export default Registration;