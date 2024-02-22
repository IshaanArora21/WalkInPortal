import React from "react"
import ReviewStyles from "./WalkInReview.module.scss"
export default function WalkInReview(){
    return(
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
        <div className="">03rd July 2021</div>
        <div className="">9:00 AM to 11:00 AM</div>
      </div>
    </div>

    <hr />

    <div className={ReviewStyles.subComponent}>
      <div className={ReviewStyles.componentTitle}>Venue of Walk-In :</div>
      <div className={ReviewStyles.addressValue}>
        <div className="">{}</div>
        <div className="">{}</div>
        <div className="">{}</div>
        <div className="">
          {} - {}
        </div>
        <div className="">+{}</div>
      </div>
    </div>

    <hr />

    <div className={ReviewStyles.subComponent}>
      <div className={ReviewStyles.componentTitle}>THINGS TO REMEMBER :</div>
      <div className={ReviewStyles.componentValue}>

        <div className="">- {}</div>
    
      </div>
    </div>

    <hr />

    <button className={ReviewStyles.downloadHallTicket}>DOWNLOAD HALL TICKET</button>
  </div>
</div>
    )
}