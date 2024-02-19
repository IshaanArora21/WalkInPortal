import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Listing from "./WalkinModule/Listing";
import Job from "./WalkinModule/Job";
import Review from "./WalkinModule/Review";
const App = () => (
  <div>
<Listing/>
  <Job/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
