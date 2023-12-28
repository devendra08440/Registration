import React, { useState } from "react";
import './style.css';
import logo from '../../Asset/logo.jpg';
import user from '../../Asset/user.png';
import email from '../../Asset/email.png';
import lock from '../../Asset/lock.png';
import key from '../../Asset/key.png';

const Modal = (props) => {
    return(
        <div className="modal">
            <label >{props.errorMessage}</label>
        </div>
    )
}

const Registration = () => {
    const [error, setError] = useState({
        userName: "",
        email: "",
        password: "",
        're-password': "",
        terms: false
    });

    const [value, setValue] = useState({
        userName: "",
        email: "",
        password: "",
        're-password': "",
        terms: false
    });


    const inputHandle = (event) => {
        setValue({
            ...value, 
            [event.target.name]: event.target.name==="terms"? event.target.checked:event.target.value
        });

        if(event.target.name==="userName"){
            if (event.target.value.includes(" ") || event.target.value.length===0){
                setError({
                    ...error,
                    [event.target.name]: ""
                });
            }else{
                setError({
                    ...error,
                    [event.target.name]: "Please enter your full name"
                });
            }
        }

        if(event.target.name==="password"){
            if(event.target.value.length>5 || event.target.value.length===0){
                setError({
                    ...error,
                    [event.target.name]: ""
                });
            }
            else{
                setError({
                    ...error,
                    [event.target.name]: "Password must be at least 6 characters long"
                });
            }
        }
        if(event.target.name==="re-password"){
            if(event.target.value===value.password || event.target.value.length===0){
                setError({
                    ...error,
                    [event.target.name]: ""
                })
            }else{
                setError({
                    ...error,
                    [event.target.name]: "Password must be same."
                });
            }

        }
    }

    const validateForm = (value) => {
        alert("Registered.");
    }
    
    const handleSubmit = (event) => {
        // event.preventDefault();
        validateForm(value);
    }

    const [modalOpen1, setModalOpen1] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);

    return (
        <div className="container">
            <form action="https://www.google.com">
                <h3>Sign up</h3>

                <div className="input-field">
                    <img src={user} alt="user-icon" />
                    <input type="text" placeholder="Your Name" name="userName" id="userName" className={error.userName?"errorInput":""} onChange={inputHandle} value={value.userName} autoComplete="on"/>
                    <span className={error.userName?"error":""} htmlFor={"userName"} onClick={()=>setModalOpen1(!modalOpen1)} onMouseEnter={()=>setModalOpen1(!modalOpen1)} onMouseLeave={()=>setModalOpen1(!modalOpen1)}>
                        &#x26A0;
                        <div className="box-modal">
                            {modalOpen1?<Modal errorMessage={error.userName}/>:<></>}
                        </div>
                    </span>
                    
                </div>

                <div className="input-field">
                    <img src={email} alt="email-icon" />
                    <input type="text" placeholder="Your Email" name="email" id="email" className={error.email?"errorInput":""} onChange={inputHandle} value={value.email} autoComplete="on"/>
                    <span className={error.email?"error":""} htmlFor={"email"} onClick={()=>setModalOpen2(!modalOpen2)} onMouseEnter={()=>setModalOpen2(!modalOpen2)} onMouseLeave={()=>setModalOpen2(!modalOpen2)}>
                        &#x26A0;
                        <div className="box-modal">
                            {modalOpen2?<Modal errorMessage={error.email}/>:<></>}
                        </div>
                    </span>
                </div>

                <div className="input-field">
                    <img src={lock} alt="lock-icon" />
                    <input type="password" placeholder="Password" name="password" id="password" className={error.password?"errorInput":""} onChange={inputHandle} value={value.password} autoComplete="on"/>
                    <span className={error.password?"error":""} htmlFor={"password"} onClick={()=>setModalOpen3(!modalOpen3)} onMouseEnter={()=>setModalOpen3(!modalOpen3)} onMouseLeave={()=>setModalOpen3(!modalOpen3)}>
                    &#x26A0;
                        <div className="box-modal">
                            {modalOpen3?<Modal errorMessage={error.password}/>:<></>}
                        </div>
                    </span>
                </div>

                <div className="input-field">
                    <img src={key} alt="key-icon" />
                    <input type="password" placeholder="Repeat your password" name="re-password" id="re-password" className={error["re-password"]?"errorInput":""} onChange={inputHandle} value={value["re-password"]} autoComplete="on"/>
                    <span className={error["re-password"]?"error":""} htmlFor={"re-password"} onClick={()=>setModalOpen4(!modalOpen4)} onMouseEnter={()=>setModalOpen4(!modalOpen4)} onMouseLeave={()=>setModalOpen4(!modalOpen4)}>
                        &#x26A0;
                        <div className="box-modal">
                            {modalOpen4?<Modal errorMessage={error["re-password"]}/>:<></>}
                        </div>
                    </span>
                </div>

                <div className="checkbox-field">
                    <input type="checkbox" id="terms" name="terms" className={error.terms?"errorInput":""} onChange={inputHandle}/><label htmlFor="terms" className={error.terms?"errorLabel":""}>I agree all statements in <a href="https://www.google.com">Terms of service</a> </label>
                    <span className={error.terms?"error":""} htmlFor={"terms"}>&#x26A0;</span>
                </div>

                <div className="button-field">
                    <button disabled={!Object.values(value).every((val)=>val)} onClick={handleSubmit}>Register</button>
                </div>
            </form>
            <div className="logo-image">
                <img src={logo} alt="logo-image" />
            </div>
        </div>
    )
}

export default Registration;