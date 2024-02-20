import React from "react"
import WalkInCardStyles from "./WalkInCard.module.scss"
export default function WalkInCard(){
    return <div className={WalkInCardStyles.listContainer}>
  <div className={WalkInCardStyles.jobContainer}>
    <h1>{`Walkin for 1`}</h1>

    <div className={WalkInCardStyles.expiresInJob}>{`3 days`}</div>


    <div className={WalkInCardStyles.dateTimeContainer}>
      <span>Date & Time :</span>

      <div className={WalkInCardStyles.dateTimeValue}>
        <div className="">{`9:00 am`} to {`12:00pm`}</div>
        <div className={WalkInCardStyles.splitter}></div>
        <div className={WalkInCardStyles.location}>
          <img
            src="/assets/icons/location_on_grey_24dp.svg"
            alt="location icon"
          />
          <span>{`Mumbai`}</span>
        </div>
      </div>
    </div>

    <hr />

    <div className={WalkInCardStyles.jobRoleTitle}>Job Roles :</div>
    <div className={WalkInCardStyles.jobRoleContainer}>
      <div className={WalkInCardStyles.singleJob}>
        <img
          src="/assets/icons/Instructional Designer.svg"
          alt="Instructional Designer icon"
        />
        <span className="">{`Instructional Designer`}</span>
      </div>
      <div className={`${WalkInCardStyles.jobSplitter} ${WalkInCardStyles.screenMobile}`}></div>
    </div>

    <div className={WalkInCardStyles.extraRolesContainer}>
      <span className={WalkInCardStyles.extraRoles}>{`Extra role`}</span>
    </div>

    <button className={WalkInCardStyles.moreDetailsButton}>
      VIEW MORE DETAILS
    </button>
  </div>
  

  
</div>
}