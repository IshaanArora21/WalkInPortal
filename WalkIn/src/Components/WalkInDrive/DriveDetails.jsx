import React from "react"
import Prerequistes from "../WalkInCard/Prerequistes"
import Timeslot from "../WalkInCard/Timeslot"
import JobDetails from "../WalkInCard/JobDetails"
import WalkInCard from "../WalkInCard/WalkInCard"
export default function DriveDetails(){

    return (
        <div>
            <WalkInCard exploreMore={true}/>
            <Prerequistes />
            <Timeslot />
            <JobDetails />

        </div>
    )
}