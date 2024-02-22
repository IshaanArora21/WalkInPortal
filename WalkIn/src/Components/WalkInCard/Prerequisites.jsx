import React, { useState } from "react"
import PrerequisitesStyles from "./Prerequisites.module.scss"
export default function Prerequistes() {
    const [showPrerequisites,setShowPrerequisites]=useState(true);
    const notVisible={
       display:'none'
    }
    return (
        <div className={PrerequisitesStyles.mainComponent}>
            <div className={PrerequisitesStyles.dropDown} onClick={()=>setShowPrerequisites(!showPrerequisites)}>
                <span>Pre-requisites & Application Process</span>
                <div>

                    <img
                        src={showPrerequisites?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
                        alt="expand less/more icon"

                    />
                </div>
            </div>

            <div
                className={PrerequisitesStyles.singleJobContainer} style={showPrerequisites?{}:notVisible}
            >
                <div className={PrerequisitesStyles.jobContainerInfo}>
                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>General Instructions :</div>

                        <div className={PrerequisitesStyles.jobValue}>


                            <div className="">- { }</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Instructions for the Exam :</div>

                        <div className={PrerequisitesStyles.jobValue}>


                            <div className="">- { }</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Minimum System Requirements :</div>

                        <div className={PrerequisitesStyles.jobValue}>

                            <div className="">- {`Hello`}</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Process :</div>

                        <div className={PrerequisitesStyles.jobValue}>



                            <div className="">- { }</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}