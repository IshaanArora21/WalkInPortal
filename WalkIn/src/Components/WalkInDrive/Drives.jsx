import React, {useEffect,useState} from "react"
import WalkInCard from "../WalkInCard/WalkInCard"
import axios from "axios"
export default function Drives(){

  const [walkInCardData, setWalkInCardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const requestDrives = {
        info: {
          fieldName: "getAllWalkInDrives",
        },
        arguments: {
          
        },
      };
        try {
            const response = await axios.post('http://localhost:4000/dev/api/handle_graphql',requestDrives);
            console.log(response.data)
            setWalkInCardData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
},[]);
    return (
        <div>
          {walkInCardData.map((walkInCard) => (
        <WalkInCard
          key={walkInCard.id} 
          guid={walkInCard.guid}
          dt_created={walkInCard.dt_created}
          dt_modified={walkInCard.dt_modified}
          title={walkInCard.drive_title}
          location={walkInCard.location}
          start_date={walkInCard.start_date}
          end_date={walkInCard.end_date}
          job_Roles={walkInCard.job_Roles}
          expiry={walkInCard.expiry}
        />
      ))}
        </div>
    )
}