import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import Router from "./Router"
import "./index.css";

const App = () => (
  <RouterProvider router={Router}/>
);
ReactDOM.render(<App />, document.getElementById("app"));
