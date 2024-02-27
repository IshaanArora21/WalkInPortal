import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "LoginMFE/Login";
import Registration from "RegistrationMFE/Registration";
import WalkInDrive from "WalkInMFE/WalkInDrive";
import Header from "NavigationMFE/Header";
import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register/*" element={<Registration />} />
        <Route path="/walkindrives/*" element={<WalkInDrive />} />
      </Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
