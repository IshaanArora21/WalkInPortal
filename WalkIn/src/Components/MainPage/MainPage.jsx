import React from "react"
import MainPageStyles from "./MainPage.module.scss"
import { createBrowserRouter } from "react-router-dom";

import WalkInCard from "../WalkInCard/WalkInCard"
import Drives from "../WalkInDrive/Drives";
import WalkInReview from "../Review/WalkInReview";
import DriveDetails from "../WalkInDrive/DriveDetails";
const MainPage=createBrowserRouter(

    [   {
        path:"/",
        element:<Drives/>
    },
        {
            path:'/WalkIn',
            element:<WalkInCard/>
        },
        {
            path:'/WalkInDrive',
            element:<DriveDetails/>
        },
        {
            path:'/Review',
            element:<WalkInReview/>
        }
    ]
)
export default MainPage;