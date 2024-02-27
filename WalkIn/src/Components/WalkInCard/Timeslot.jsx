import React from "react"
import TimeSlotStyles from "./Timeslot.module.scss"
export default function Timeslot(props) {
  return (
    <div className={TimeSlotStyles.mainComponent}>
      <div className={TimeSlotStyles.timeSlotContainer}>
        <h1>Time Slots & Preferences</h1>

        <div className={TimeSlotStyles.radioContainer}>
          <span className={TimeSlotStyles.radioContainerLabel}>Select a Time Slot :</span>

          <div className={TimeSlotStyles.radioContainerOptions}>
            {props.timings?.map((slot, index) => (
              <div key={index} className={TimeSlotStyles.singleRadioContainer}>
                <input
                  type="radio"
                  name="isInNoticePeriod"
                  value={slot} // Assuming 'slot' contains the value for the radio button
                />
                <label htmlFor={`isInNoticePeriod${index}`}>{slot}</label>
              </div>
            ))}
          </div>

        </div>

        <hr />

        <div className={TimeSlotStyles.technologiesContainer}>
          <span className={TimeSlotStyles.technologiesContainerLabel}>Select Your Preference :</span>

          {props.job_Roles?.map((role, index) => (
            <div className={TimeSlotStyles.singleCheckboxContainer}>
              <div key={index}>
                <input
                  type="checkbox"
                  id={`checkbox_job_role_${index}`} 
                  value={role.job_title} 
                />
                <label htmlFor={`checkbox_job_role_${index}`}>{role.job_title}</label>
              </div>
            </div>
          ))}

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
          <input type="file" accept=".pdf" id="input_file" style={{ display: "none" }} />
        </div>
      </div>
    </div>
  )
}