import React from "react";
import ReactDOM from "react-dom";
import Login from "./LoginModule/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => (
  // <Router>
  //     <Routes>
  //       <Route path="/" element={<Login/>} />
  //     </Routes>
  //   </Router>
  <Login/>
);
ReactDOM.render(<App />, document.getElementById("app"));
