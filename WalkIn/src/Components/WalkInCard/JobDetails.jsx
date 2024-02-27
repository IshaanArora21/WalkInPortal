import React, { useState } from "react"
import JobDetailsStyles from "./JobDetails.module.scss"
export default function JobDetails(props) {
    const jobRoles = props.job_Roles || [];
    const [showDetails, setShowDetails] = useState(new Array(jobRoles.length).fill(false));
    const notVisible = {
        display: 'none'
    }
    const toggleDetails = (index) => {
        const newShowDetails = [...showDetails];
        newShowDetails[index] = !newShowDetails[index];
        setShowDetails(newShowDetails);
      };
    return (
        <div className={JobDetailsStyles.mainComponent}>
            {props.job_Roles?.map((job, index) => (
                <div key={index} className={JobDetailsStyles.singleJobContainer}>
                    <div className={JobDetailsStyles.dropDown} onClick={() => toggleDetails(index)}>
                        <span>{job.job_title}</span>
                        <div>
                            <img
                                src={showDetails[index] ? "/assets/icons/expand_less_black_24dp.svg" : "/assets/icons/arrow-down.svg"}
                                alt="expand less/more icon"
                            />
                        </div>
                    </div>

                    <div className={JobDetailsStyles.jobContainerInfo} style={showDetails[index] ? {} : notVisible}>
                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>gross compensation package :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                Rs. {job.package} lpa
                            </div>
                        </div>

                        <hr />

                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>Role Description :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                <div>{job.job_description}</div>
                            </div>
                        </div>

                        <hr />

                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>Requirements :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                <div>{job.job_requirements}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}