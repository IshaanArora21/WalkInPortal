import React from "react";
import ReactDOM from "react-dom";
import Login from "./LoginModule/Login"
import "./index.css";

const App = () => (
  <Login/>
);
ReactDOM.render(<App />, document.getElementById("app"));
