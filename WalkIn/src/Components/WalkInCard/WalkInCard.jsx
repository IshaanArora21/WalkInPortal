import React from "react"
import WalkInCardStyles from "./WalkInCard.module.scss"
import { useNavigate, Link } from "react-router-dom"
import { useDriveStore } from "../../ReactStore/Store";
import axios from "axios";
export default function WalkInCard({ driveDetails, drive }) {
  const navigateTo = useNavigate();
  const { applyDrive } = useDriveStore();
  const formatDate = (inputDate) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  const handleApply = async () => {
    const insertQuery = `
    mutation ApplyDrive($walk_in_drive_id: Int!, $timeslot_id: Int!, $updated_resume: String!, $job_role_id: [Int!]!, $user_id: Int!) {
      applyDrive(applicantInput: {
        walk_in_drive_id: $walk_in_drive_id,
        timeslot_id: $timeslot_id,
        user_id: $user_id,
        updated_resume: $updated_resume,
        job_role_id: $job_role_id
      })
    }
  `;

    const variables = {
      walk_in_drive_id: driveDetails.id,
      timeslot_id: applyDrive.timeSlot,
      updated_resume: applyDrive.updatedResume,
      job_role_id: applyDrive.jobRoles,
      user_id: 1
    }
    try {
      console.log("These are variables being sent:", variables)
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query: insertQuery,
          variables: variables
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      );

      console.log(response.data);
      navigateTo("/walkindrives/review");

    } catch (error) {
      console.error("Error in fetchData:", error.message);
    }

  }
  console.log(driveDetails)
  return <>
    {driveDetails &&
      <div className={WalkInCardStyles.listContainer}>
        <div className={WalkInCardStyles.jobContainer}>
          <h1>{driveDetails.drive_title}</h1>

          {driveDetails.expiry > 0 ? <div className={WalkInCardStyles.expiresInJob}>{`Expires in ${driveDetails.expiry} days`}</div> : ``}

          {drive && <div class={WalkInCardStyles.applyInJob}>
            <button
              className={WalkInCardStyles.applyButton} onClick={handleApply}
            >
              APPLY
            </button>
          </div>}

          <div className={WalkInCardStyles.dateTimeContainer}>
            <span>Date & Time :</span>

            <div className={WalkInCardStyles.dateTimeValue}>
              <div className="">{formatDate(driveDetails.start_date)} to {formatDate(driveDetails.end_date)}</div>
              <div className={WalkInCardStyles.splitter}></div>
              <div className={WalkInCardStyles.location}>
                <img
                  src="/assets/icons/location_on_grey_24dp.svg"
                  alt="location icon"
                />
                <span>{driveDetails.location}</span>
              </div>
            </div>
          </div>

          <hr />

          <div className={WalkInCardStyles.jobRoleTitle}>Job Roles :</div>

          <div className={WalkInCardStyles.jobRoleContainer}>
            {driveDetails.job_Roles?.map((job_role, index) => (
              <div className={WalkInCardStyles.singleJob} key={index}>
                <img
                  src="/assets/icons/Instructional Designer.svg"
                  alt="Instructional Designer icon"
                />
                <span className="">{job_role.job_title}</span>
              </div>
            ))}
            <div className={`${WalkInCardStyles.jobSplitter} ${WalkInCardStyles.screenMobile}`}></div>

          </div>




          <div className={WalkInCardStyles.extraRolesContainer}>
            <span className={WalkInCardStyles.extraRoles}>{`Extra role`}</span>
          </div>

          <Link to={{ pathname: `/walkindrives/drive/${driveDetails.guid}` }} style={{ textDecoration: 'none' ,fontWeight:600}}>
            {!drive && <button className={WalkInCardStyles.moreDetailsButton}>
              VIEW MORE DETAILS
            </button>}
          </Link>

        </div>



      </div>}
  </>
}