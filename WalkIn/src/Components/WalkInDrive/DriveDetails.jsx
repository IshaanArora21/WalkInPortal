import React, { useState, useEffect } from "react";
import Prerequisites from "../WalkInCard/Prerequisites";
import Timeslot from "../WalkInCard/Timeslot";
import JobDetails from "../WalkInCard/JobDetails";
import WalkInCard from "../WalkInCard/WalkInCard";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function DriveDetails(){
    const [walkInCardData, setWalkInCardData] = useState([]);
    const { guid } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const requestDrives = {
                info: {
                    fieldName: "getWalkInDriveByGUID",
                },
                arguments: {
                    guid: guid,
                },
            };
    
            try {
                const response = await axios.post(
                    "http://localhost:4000/dev/api/handle_graphql",
                    requestDrives
                );
                console.log(response.data);
                setWalkInCardData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [guid]);

    return (
        <div>
            <WalkInCard exploreMore={true} 
            location={walkInCardData.location}
            start_date={walkInCardData.start_date}
            end_date={walkInCardData.end_date}
            title={walkInCardData.drive_title}
            job_Roles={walkInCardData.job_Roles}
            />
            <Prerequisites 
            general_instructions={walkInCardData.general_instructions}
            instructions_for_exam={walkInCardData.instructions_for_exam}
            minimum_system_requirements={walkInCardData.minimum_system_requirements}
            process={walkInCardData.process}
            />

            <Timeslot 
            timings={walkInCardData.time_Slots}
            job_Roles={walkInCardData.job_Roles}/>
            <JobDetails 
            job_Roles={walkInCardData.job_Roles}/>
        </div>
    );
}
