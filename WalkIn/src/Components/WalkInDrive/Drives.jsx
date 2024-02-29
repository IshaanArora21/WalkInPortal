import React, {useEffect,useState} from "react"
import WalkInCard from "../WalkInCard/WalkInCard"
import axios from "axios"
import { useDriveStore } from "../../ReactStore/Store";
export default function Drives(){
  const { drives, fetchDrives } = useDriveStore();
  useEffect(() => {
    const fetchData = async () => {
      const query = `
        query {
          getAllWalkInDrives {
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

        try {
          const response = await axios.post(
            "http://localhost:5000/graphql",
            { query },
            {
              headers: {
                "x-api-key": "dummy-api-key",
              },
            }
          );
            fetchDrives(response.data.data.getAllWalkInDrives);
            console.log(drives);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
},[]);
    return (
        <div>
          {drives?.map((drive) => (
        <WalkInCard
          key={drive.id} 
          driveDetails={drive}
        />
      ))}
        </div>
    )
}