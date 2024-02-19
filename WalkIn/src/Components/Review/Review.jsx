import React from "react"
import "./Review.css"
export default function Review(){
    return(
        <div class="main_component">
  <div class="hallTicket_component">
    <img src="/assets/icons/correct_green.png" alt="correct icon" />
    <h1>
      Congratulations ! You have successfully applied for the walk-in
      opportunity
    </h1>

    <hr />

    <div class="sub_component">
      <div class="component_title">Date & Time of Walk-In :</div>
      <div class="component_value">
        <div class="">03rd July 2021</div>
        <div class="">9:00 AM to 11:00 AM</div>
      </div>
    </div>

    <hr />

    <div class="sub_component">
      <div class="component_title">Venue of Walk-In :</div>
      <div class="address_value">
        <div class="">{}</div>
        <div class="">{}</div>
        <div class="">{}</div>
        <div class="">
          {} - {}
        </div>
        <div class="">+{}</div>
      </div>
    </div>

    <hr />

    <div class="sub_component">
      <div class="component_title">THINGS TO REMEMBER :</div>
      <div class="component_value">

        <div class="">- {}</div>
    
      </div>
    </div>

    <hr />

    <button class="download-hall-ticket">DOWNLOAD HALL TICKET</button>
  </div>
</div>
    )
}