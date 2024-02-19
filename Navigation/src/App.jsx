import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => (
  <div>
<Header/>
  <Footer/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
