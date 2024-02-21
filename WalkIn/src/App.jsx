import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainPage from "./Components/MainPage/MainPage"
import Prerequistes from "./Components/WalkInCard/Prerequistes"
import Timeslot from "./Components/WalkInCard/Timeslot"
import { RouterProvider } from "react-router-dom";
import JobDetails from "./Components/WalkInCard/JobDetails";
import DriveDetails from "./Components/WalkInDrive/DriveDetails";
const App = () => (
  <div>
<RouterProvider router={MainPage}/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
