import React from "react";
import ReactDOM from "react-dom";
// import Login from "LoginMFE/Login"
import PersonalInfo from "RegistrationMFE/PersonalInfo"
import "./index.css";

const App = () => (
  <PersonalInfo/>
);
ReactDOM.render(<App />, document.getElementById("app"));
