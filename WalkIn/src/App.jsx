import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainPage from "./Components/MainPage/MainPage"
const App = () => (
  <div>
<MainPage/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
