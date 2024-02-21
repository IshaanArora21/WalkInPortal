import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Review from "./Components/Review/Review"
import MainPage from "./Components/MainPage/MainPage";
import { RouterProvider } from "react-router-dom";
const App = () => (
  <div>
   <RouterProvider router={MainPage}/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
