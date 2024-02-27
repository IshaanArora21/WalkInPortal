import React, { useState } from "react"
import PrerequisitesStyles from "./Prerequisites.module.scss"
export default function Prerequistes(props) {
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


                            <div className=""> { props.general_instructions}</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Instructions for the Exam :</div>

                        <div className={PrerequisitesStyles.jobValue}>


                            <div className=""> {props.instructions_for_exam }</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Minimum System Requirements :</div>

                        <div className={PrerequisitesStyles.jobValue}>

                            <div className=""> {props.minimum_system_requirements}</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Process :</div>

                        <div className={PrerequisitesStyles.jobValue}>



                            <div className=""> {props.process}</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}