import React from "react"
import TimeSlotStyles from "./Timeslot.module.scss"
export default function Timeslot(){
    return (
      <div className={TimeSlotStyles.mainComponent}>
        <div className={TimeSlotStyles.timeSlotContainer}>
    <h1>Time Slots & Preferences</h1>

    <div className={TimeSlotStyles.radioContainer}>
      <span className={TimeSlotStyles.radioContainerLabel}>Select a Time Slot :</span>

      <div className={TimeSlotStyles.radioContainerOptions}>
      

        <div className={TimeSlotStyles.singleRadioContainer}>
          <input
            type="radio"
            name="isInNoticePeriod"
           
           
          />
          <label htmlFor="isInNoticePeriod">{}</label>
        </div>
        
      </div>
    </div>

    <hr />

    <div className={TimeSlotStyles.technologiesContainer}>
      <span className={TimeSlotStyles.technologiesContainerLabel}>Select Your Preference :</span>
     

      <div className={TimeSlotStyles.singleCheckboxContainer}>
        <input
          type="checkbox"
   
       
        
        />
        <label htmlFor="checkbox_job_role">
          {}
        </label>
      </div>
      
    </div>
    <hr />

    <div className={TimeSlotStyles.uploadResumeContainer}>
      <label className={TimeSlotStyles.inputFileLabel} htmlFor="input_file">
        <img
          src="/assets/icons/Upload_green_24dp.svg"
          alt="Upload Resume icon"
        />
        Upload Resume
      </label>
      <input type="file" accept=".pdf" id="input_file" style={{display:"none"}}/>
    </div>
  </div>
  </div>
    )
}