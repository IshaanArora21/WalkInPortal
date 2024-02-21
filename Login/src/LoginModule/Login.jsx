import React, { useState } from "react";
import LoginStyles from "./Login.module.scss"
import useLoginStore from '../ReactStore/Store'
export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [rememberMe,setRememberMe]=useState(true);
  return (
    <div className={LoginStyles.loginMainContainer}>
    <div className={LoginStyles.loginContainer}>
      <div className="">
        <h1>Log in</h1>
  
        <div className={LoginStyles.loginFilledContainer}>
          <div className="">
            <input
              className={LoginStyles.loginInput}
              type="text"
              name="email"
              id="email"
              placeholder="Email ID*"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <a href="#" className={LoginStyles.inputForget}>FORGOT EMAIL ID?</a>
        </div>
  
        <div className={LoginStyles.loginFilledContainer}>
          <div className={LoginStyles.inputField}>
            <input
              className={LoginStyles.loginInput}
              type="password"
              name="password"
              id="password"
              placeholder="Password*"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <img
              src="/assets/icons/preview.svg"
              alt="preview password icon"
              
            />
          </div>
          <a href="#" className={LoginStyles.inputForget}>FORGOT PASSWORD?</a>
        </div>
      </div>
      <div className={LoginStyles.rememberMe}>
        <input type="checkbox" name="rememberMe" id="rememberMe" onChange={(e)=>setRememberMe(e.target.value)}/>Remember Me
      </div>
  
      <div className={LoginStyles.loginButtonContainer}>
        <button >LOG IN</button>
      </div>
  
      <div className={LoginStyles.registerUser}>
        <p>Not registered yet?</p>
        <a className={LoginStyles.inputForget}
          >CREATE AN ACCOUNT</a>
      </div>
    </div>
    <div className={LoginStyles.moreOptions}>
      <a href="#">About</a>
      <div className={LoginStyles.splitter}></div>
      <a href="#">Contact Us</a>
    </div>
  </div>
  );
}
