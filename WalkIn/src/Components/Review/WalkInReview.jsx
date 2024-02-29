import React, { useEffect, useState } from "react"
import ReviewStyles from "./WalkInReview.module.scss"
import { useDriveStore } from "../../ReactStore/Store";
import axios from "axios";
export default function WalkInReview() {
  const { applyDrive, drive } = useDriveStore();
  const [reviewData, setReviewData] = useState({});
  const formatDate = (inputDate) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    const getDayWithSuffix = (day) => {
      if (day >= 11 && day <= 13) {
        return `${day}th`;
      }
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };
  
    const formattedDate = `${getDayWithSuffix(day)} ${month} ${year}`;
    return formattedDate;
  };
  useEffect(() => {
    const fetchData = async () => {
      const query = `
    query GetHallTicket($hallticket: HallTicketInput!) {
      getHallTicket(hallticket: $hallticket) {
        job_title
        slot_timings
        user_id
        walk_in_drive_id
        company_name
        address_line_1
        area
        pincode
        things_to_remember
        phone
        city
        start_date
      }
    }
    
    
    `
      const variables = {
        hallticket: {
          user_id: 1,
          job_role_id: applyDrive.jobRoles[0],
          walk_in_drive_id: drive.id,
          timeslot_id: applyDrive.timeSlot
        }
      }
      try {
        console.log("These are variables being sent:", variables)
        const response = await axios.post(
          "http://localhost:5000/graphql",
          {
            query: query,
            variables: variables
          },
          {
            headers: {
              "x-api-key": "dummy-api-key",
            },
          }
        );

        console.log(response.data);
        setReviewData(response.data.data.getHallTicket)


      } catch (error) {
        console.error("Error in fetchData:", error.message);
      }
    }
    fetchData();
  }, [])
  return (
    <div className={ReviewStyles.mainComponent}>
      <div className={ReviewStyles.hallTicketComponent}>
        <img src="/assets/icons/correct_green.png" alt="correct icon" />
        <h1>
          Congratulations ! You have successfully applied for the walk-in
          opportunity
        </h1>

        <hr />

        <div className={ReviewStyles.subComponent}>
          <div className={ReviewStyles.componentTitle}>Date & Time of Walk-In :</div>
          <div className={ReviewStyles.componentValue}>
            <div className="">{formatDate(reviewData.start_date)}</div>
            <div className="">{reviewData.slot_timings}</div>
          </div>
        </div>

        <hr />

        <div className={ReviewStyles.subComponent}>
          <div className={ReviewStyles.componentTitle}>Venue of Walk-In :</div>
          <div className={ReviewStyles.addressValue}>
            <div className="">{reviewData.company_name}</div>
            <div className="">{reviewData.address_line_1}</div>
            <div className="">{reviewData.area}</div>
            <div className="">
              {reviewData.city} - {reviewData.pincode}
            </div>
            <div className="">+{reviewData.phone}</div>
          </div>
        </div>

        <hr />

        <div className={ReviewStyles.subComponent}>
          <div className={ReviewStyles.componentTitle}>THINGS TO REMEMBER :</div>
          <div className={ReviewStyles.componentValue}>

            <div className="">
              {reviewData.things_to_remember &&
                (() => {
                  const sentences = reviewData.things_to_remember.split('.');
                  const lastSentence = sentences.pop(); // Remove the last sentence
                  return (
                    <>
                      {sentences.map((sentence, index) => (
                        <div key={index}>-{sentence.trim()}.</div>
                      ))}
                      {lastSentence && <div key={sentences.length}>{lastSentence.trim()}.</div>}
                    </>
                  );
                })()}
            </div>
          </div>
        </div>

        <hr />

        <button className={ReviewStyles.downloadHallTicket}>DOWNLOAD HALL TICKET</button>
      </div>
    </div>
  )
}