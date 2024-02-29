import React,{useEffect} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "LoginMFE/Login";
import Registration from "RegistrationMFE/Registration";
import WalkInDrive from "WalkInMFE/WalkInDrive";
import Header from "NavigationMFE/Header";
import "./index.css";
import getSessionData from "LoginMFE/fetch";

const App = () => {
 useEffect(()=>{
  getSessionData();
 })

  return (
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
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);