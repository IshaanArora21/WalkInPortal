import React from "react"
import "./Listing.css"
export default function Listing(){
    return <div class="list_container">
  <div class="job_container">
    <h1>{`Walkin for 1`}</h1>

    <div class="expires_in_job">{`3 days`}</div>


    <div class="date_time_container">
      <span>Date & Time :</span>

      <div class="date_time_value">
        <div class="">{`9:00 am`} to {`12:00pm`}</div>
        <div class="splitter"></div>
        <div class="location">
          <img
            src="/assets/icons/location_on_grey_24dp.svg"
            alt="location icon"
          />
          <span>{`Mumbai`}</span>
        </div>
      </div>
    </div>

    <hr />

    <div class="job_role_title">Job Roles :</div>
    <div class="job_role_container">
      <div class="single_job">
        <img
          src="/assets/icons/Instructional Designer.svg"
          alt="Instructional Designer icon"
        />
        <span class="">{`Instructional Designer`}</span>
      </div>
      <div class="job_splitter screen_mobile"></div>
    </div>

    <div class="extra_roles_container">
      <span class="extra_roles">{`Extra role`}</span>
    </div>

    <button class="more_details_btn">
      VIEW MORE DETAILS
    </button>
  </div>
  

  
</div>
}