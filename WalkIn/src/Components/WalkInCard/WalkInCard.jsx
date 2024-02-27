import React from "react"
import WalkInCardStyles from "./WalkInCard.module.scss"
import {useNavigate,Link} from "react-router-dom"
export default function WalkInCard(props){
  // const navigate=useNavigate();
  function handleClick(){
      // navigate("/walkindrives/drive");
      
  }
    return <div className={WalkInCardStyles.listContainer}>
  <div className={WalkInCardStyles.jobContainer}>
    <h1>{props.title}</h1>

    {props.expiry>0 ? <div className={WalkInCardStyles.expiresInJob}>{`Expires in ${props.expiry} days`}</div> : ``}



      {props.exploreMore && <div class={WalkInCardStyles.applyInJob}>
        <button
          className={WalkInCardStyles.applyButton}
        >
          APPLY
        </button>
      </div>}
    <div className={WalkInCardStyles.dateTimeContainer}>
      <span>Date & Time :</span>

      <div className={WalkInCardStyles.dateTimeValue}>
        <div className="">{props.start_date} to {props.end_date}</div>
        <div className={WalkInCardStyles.splitter}></div>
        <div className={WalkInCardStyles.location}>
          <img
            src="/assets/icons/location_on_grey_24dp.svg"
            alt="location icon"
          />
          <span>{props.location}</span>
        </div>
      </div>
    </div>

    <hr />

    <div className={WalkInCardStyles.jobRoleTitle}>Job Roles :</div>

  <div className={WalkInCardStyles.jobRoleContainer}>
  {props.job_Roles?.map((job_role, index) => (
    <div className={WalkInCardStyles.singleJob}  key={index}>
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

    <Link to={{ pathname: `/walkindrives/drive/${props.guid}`}}>
    {!props.exploreMore && <button className={WalkInCardStyles.moreDetailsButton}>
      VIEW MORE DETAILS
    </button>}
    </Link>
    
  </div>
  

  
</div>
}