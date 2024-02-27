import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import WalkInDrive from "./Components/WalkInDrive";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => (
  <div className="walkin-container">
  <Router>
    <Routes>
      <Route path="/walkindrives/*" element={<WalkInDrive />} />
    </Routes>
  </Router>
</div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
