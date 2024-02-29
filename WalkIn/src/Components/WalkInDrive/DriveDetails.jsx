import React, { useState, useEffect } from "react";
import Prerequisites from "../WalkInCard/Prerequisites";
import Timeslot from "../WalkInCard/Timeslot";
import JobDetails from "../WalkInCard/JobDetails";
import WalkInCard from "../WalkInCard/WalkInCard";
import DriveDetailsStyles from "./DriveDetails.module.scss";
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function DriveDetails(){
    const [walkInCardData, setWalkInCardData] = useState([]);
    const { guid } = useParams();
    const [driveDetails,setDriveDetails]=useState({});
   
    useEffect(()=>{
        const fetchData = async () => {
            const query = `
            query getWalkInDriveByGUID($guid: String!) {
                getWalkInDriveByGUID(guid: $guid) {
                  time_Slots {
                    slot_timings
                    id
                  }
                  start_date
                  process
                  minimum_system_requirements
                  location
                  job_Roles {
                    id
                    job_description
                    job_requirements
                    job_title
                    package
                  }
                  instructions_for_exam
                  id
                  guid
                  general_instructions
                  expiry
                  end_date
                  dt_modified
                  dt_created
                  drive_title
                }
              }
              
            `;
            const variables = {
                guid:guid
              };
              try {
                const response = await axios.post(
                  "http://localhost:5000/graphql",
                  { query,
                variables },
                  {
                    headers: {
                      "x-api-key": "dummy-api-key",
                    },
                  }
                );
                  setDriveDetails(response.data.data.getWalkInDriveByGUID);
                  console.log(response.data.data.getWalkInDriveByGUID);
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
      
          fetchData();
    }
        ,[])
        return (
          <div>
            {driveDetails && driveDetails.job_Roles && (  // Check if driveDetails and job_Roles exist
              <div>
                <WalkInCard drive={true} driveDetails={driveDetails} />
                <Prerequisites driveDetails={driveDetails} />
                <Timeslot driveDetails={driveDetails} />
                {driveDetails.job_Roles.map((jobDetails, index) => {
                  return <JobDetails jobDetails={jobDetails} key={index} />;
                })}
              </div>
            )}
          </div>
        );
        
        
}
