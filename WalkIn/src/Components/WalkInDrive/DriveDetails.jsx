import React from "react"
import Prerequisites from "../WalkInCard/Prerequisites"
import Timeslot from "../WalkInCard/Timeslot"
import JobDetails from "../WalkInCard/JobDetails"
import WalkInCard from "../WalkInCard/WalkInCard"
export default function DriveDetails(){

    return (
        <div>
            <WalkInCard exploreMore={true}/>
            <Prerequisites />
            <Timeslot />
            <JobDetails />

        </div>
    )
}