import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Registration from "RegistrationMFE/Registration"
import WalkIn from "WalkInMFE/WalkIn"
import Login from "LoginMFE/Login"
const Router = createBrowserRouter([
 
  {
    path: "/",
    // element: <Login />,
  },
  
  {
    path: "/register/*",
    element: <Registration />,
  },
  {
    path: "",
    element: <PersonalInformation />,
  },
  {
    path: "qualification",
    element: <Qualifications />,
  },
  {
    path: "review",
    element: <Review />,
  },
  ]);
  
  export default Router;