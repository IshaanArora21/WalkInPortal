import React, { useState } from "react";
import LoginStyles from "./Login.module.scss"
import axios from "axios"
import { useLoginStore, publishLoginEvent } from "../ReactStore/Store";
import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigateTo = useNavigate();
  const { userLogin, isUserLoggedIn, userDetails } = useLoginStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const setCookie = (cookieKey, cookieValue) => {
    document.cookie = `${cookieKey}=${cookieValue}`;
  };

  const setCookieDetails = (jwtToken) => {
    setCookie(CookieKeys.JWT_TOKEN, jwtToken);
  };

  const CookieKeys = {
    JWT_TOKEN: "user_jwt_token"
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login button called ", email, " ", password, " ", rememberMe);
    const query = `
      query login($email: String!, $password: String!) {
        login(user: { email: $email, password: $password }) {
          id
          guid
          first_name
          last_name
          email
          jwt_token
        }
      }
    `;
    const variables = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query,
          variables,
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );
      const result = response.data.data.login;
      console.log(result)
      if (result) {
        const userLoginDetails = {
          isUserLoggedIn: true,
          userDetails: result,
        };
        userLogin(userDetails);
        setCookieDetails(result.jwt_token)
        publishLoginEvent(userLoginDetails);
        navigateTo("/walkindrives");
      }
    } catch (error) {

      console.error("Error in fetchData: &", error.message);
      throw new Error("Error fetching data");
    }
  };

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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
          <input type="checkbox" name="rememberMe" id="rememberMe" onChange={(e) => setRememberMe(e.target.value)} />Remember Me
        </div>

        <div className={LoginStyles.loginButtonContainer} onClick={handleLogin}>
          <button >LOG IN</button>
        </div>

        <div className={LoginStyles.registerUser}>
          <p>Not registered yet?</p>
          <a href="/register" className={LoginStyles.inputForget}
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
export default Login;