import React from "react"
import { createBrowserRouter } from "react-router-dom";
// import CreateAccount from "../CreateAccount/CreateAccount"
import PersonalInformation from "../PersonalInformation/PersonalInformation"
import Qualifications from "../Qualifications/Qualifications"
import Review from "../Review/Review"
const MainPage = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInformation />,
  },
  {
    path: "/Qualifications",
    element: <Qualifications />,
  },
  {
    path: "/Review",
    element: <Review />,
  },
]);

export default MainPage;