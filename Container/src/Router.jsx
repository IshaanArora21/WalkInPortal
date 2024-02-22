import React from "react"
import { createBrowserRouter } from "react-router-dom";
import PersonalInformationCard from "RegistrationMFE/PersonalInformationCard"
import Qualifications from "RegistrationMFE/Qualifications"
import Drives from "WalkInMFE/Drives"
import DriveDetails from "WalkInMFE/DriveDetails"
import WalkInReview from "WalkInMFE/WalkInReview"
import Login from "LoginMFE/Login"
import Review from "RegistrationMFE/Review"
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",

    children: [
      {
        path: "/registration",
        element: <PersonalInformationCard />,
      },
      {
        path: "/registration/qualification",
        element: <Qualifications />,
      },
      {
        path: "/registration/review",
        element: <Review />,
      },
    ],
  },
  {
    path: "/walkindrives",

    children: [
      {
        path: "/walkindrives",
        element: <Drives />,
      },
      {
        path: "/walkindrives/drive",
        element: <DriveDetails />,
      },
      {
        path: "/walkindrives/review",
        element: <WalkInReview />,
      },
    ],
  },
  ]);
  
  export default Router;