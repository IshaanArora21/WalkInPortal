import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Review from "./Components/Review/Review"
const App = () => (
  <div>
<Review/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
