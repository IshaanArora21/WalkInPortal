import React,{useState,useEffect} from "react"
import TimeSlotStyles from "./Timeslot.module.scss"
import { useDriveStore } from "../../ReactStore/Store";
export default function Timeslot({driveDetails}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { applyDrive, setApplyDrive } = useDriveStore();

  useEffect(() => {
    setApplyDrive({});
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setApplyDrive({...applyDrive,updatedResume:file.name});
  };

  const handleTimeSlotChange = (e) => {
    const selectedTimeSlot = Number(e.target.value);
    setApplyDrive({ ...applyDrive, timeSlot: selectedTimeSlot });
  };

  const handleJobRoleChange = (e) => {
    const selectedJobRole = Number(e.target.value);
    const isChecked = e.target.checked;

    let updatedJobRoles = applyDrive.jobRoles || [];

    if (isChecked) {
      if (!updatedJobRoles.includes(selectedJobRole)) {
        updatedJobRoles = [...updatedJobRoles, selectedJobRole];
      }
    } else {
      updatedJobRoles = updatedJobRoles.filter(
        (role) => role !== selectedJobRole
      );
    }

    setApplyDrive({ ...applyDrive, jobRoles: updatedJobRoles });
  };

  console.log(applyDrive);

  return (
    <div className={TimeSlotStyles.mainComponent}>
      <div className={TimeSlotStyles.timeSlotContainer}>
        <h1>Time Slots & Preferences</h1>

        <div className={TimeSlotStyles.radioContainer}>
          <span className={TimeSlotStyles.radioContainerLabel}>Select a Time Slot :</span>

          <div className={TimeSlotStyles.radioContainerOptions}>
            {driveDetails.time_Slots?.map((slot, index) => (
              <div key={index} className={TimeSlotStyles.singleRadioContainer}>
                <input
                  type="radio"
                  name="isInNoticePeriod"
                  value={slot.id}
                  onChange={handleTimeSlotChange}
                  // checked={props.selectedTimings.includes(slot.id)}
                />
                <label htmlFor={`isInNoticePeriod${index}`}>{slot.slot_timings}</label>
              </div>
            ))}
          </div>

        </div>

        <hr />

        <div className={TimeSlotStyles.technologiesContainer}>
          <span className={TimeSlotStyles.technologiesContainerLabel}>Select Your Preference :</span>

          {driveDetails.job_Roles?.map((role, index) => (

            <div className={TimeSlotStyles.singleCheckboxContainer}>
              <div key={index}>
                <input
                  type="checkbox"
                  id={`checkbox_job_role_${index}`}
                  value={role.id}
                  onChange={handleJobRoleChange}
                />
                
              </div>
              <label htmlFor={`checkbox_job_role_${index}`}>{role.job_title}</label>
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
          <input
            type="file"
            accept=".pdf"
            id="input_file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  )
}