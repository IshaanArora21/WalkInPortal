import React, { useState } from "react"
import JobDetailsStyles from "./JobDetails.module.scss"
export default function JobDetails({jobDetails}) {
    const [showJobDesc, setShowJobDesc] = useState(false);
    const notVisible={
        display:'none'
    }
    const openJob = () => {
      setShowJobDesc(!showJobDesc);
    };
    return (
        <div className={JobDetailsStyles.mainComponent}>
                <div className={JobDetailsStyles.singleJobContainer}>
                    <div className={JobDetailsStyles.dropDown} onClick={openJob}>
                        <span>{jobDetails.job_title}</span>
                        <div>
                            <img
                                src={showJobDesc ? "/assets/icons/expand_less_black_24dp.svg" : "/assets/icons/arrow-down.svg"}
                                alt="expand less/more icon"
                            />
                        </div>
                    </div>

                    <div className={JobDetailsStyles.jobContainerInfo} style={showJobDesc ? {} : notVisible}>
                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>gross compensation package :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                Rs. {jobDetails.package} lpa
                            </div>
                        </div>

                        <hr />

                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>Role Description :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                <div>{jobDetails.job_description}</div>
                            </div>
                        </div>

                        <hr />

                        <div className={JobDetailsStyles.jobInfo}>
                            <div className={JobDetailsStyles.jobHeader}>Requirements :</div>
                            <div className={JobDetailsStyles.jobValue}>
                                <div>{jobDetails.job_requirements}</div>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    )
}