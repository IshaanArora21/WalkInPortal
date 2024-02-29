import React from "react";
import ReactDOM from "react-dom";
import Login from "./LoginModule/Login"
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = () => (
   <BrowserRouter>
  <Login />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
