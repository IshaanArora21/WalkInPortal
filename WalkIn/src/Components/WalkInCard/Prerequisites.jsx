import React, { useState } from "react"
import PrerequisitesStyles from "./Prerequisites.module.scss"
export default function Prerequistes({ driveDetails }) {
    const [showPrerequisites, setShowPrerequisites] = useState(true);
    const notVisible = {
        display: 'none'
    }
    return (
        <div className={PrerequisitesStyles.mainComponent}>
            <div className={PrerequisitesStyles.dropDown} onClick={() => setShowPrerequisites(!showPrerequisites)}>
                <span>Pre-requisites & Application Process</span>
                <div>

                    <img
                        src={showPrerequisites ? "/assets/icons/expand_less_black_24dp.svg" : "/assets/icons/arrow-down.svg"}
                        alt="expand less/more icon"

                    />
                </div>
            </div>

            <div
                className={PrerequisitesStyles.singleJobContainer} style={showPrerequisites ? {} : notVisible}
            >
                <div className={PrerequisitesStyles.jobContainerInfo}>
                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>General Instructions :</div>

                        <div className={PrerequisitesStyles.jobValue}>


                            <div className="">
                                {driveDetails.general_instructions &&
                                    (() => {
                                        const sentences = driveDetails.general_instructions.split('. ');
                                        const lastSentence = sentences.pop();
                                        return (
                                            <>
                                                {sentences.map((sentence, index) => (
                                                    <div key={index}>-{sentence.trim()}.</div>
                                                ))}
                                                {lastSentence && <div key={sentences.length}>{lastSentence.trim()}.</div>}
                                            </>
                                        );
                                    })()}
                            </div>



                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Instructions for the Exam :</div>

                        <div className={PrerequisitesStyles.jobValue}>


                            <div className="">
                                {driveDetails.instructions_for_exam &&
                                    (() => {
                                        const sentences = driveDetails.instructions_for_exam.split('. ');
                                        const lastSentence = sentences.pop(); // Remove the last sentence
                                        return (
                                            <>
                                                {sentences.map((sentence, index) => (
                                                    <div key={index}>-{sentence.trim()}.</div>
                                                ))}
                                                {lastSentence && <div key={sentences.length}>{lastSentence.trim()}.</div>}
                                            </>
                                        );
                                    })()}
                            </div>



                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Minimum System Requirements :</div>

                        <div className={PrerequisitesStyles.jobValue}>

                            <div className="">
                                {driveDetails.minimum_system_requirements &&
                                    (() => {
                                        const sentences = driveDetails.minimum_system_requirements.split('. ');
                                        const lastSentence = sentences.pop();
                                        return (
                                            <>
                                                {sentences.map((sentence, index) => (
                                                    <div key={index}>-{sentence.trim()}.</div>
                                                ))}
                                                {lastSentence && <div key={sentences.length}>{lastSentence.trim()}.</div>}
                                            </>
                                        );
                                    })()}
                            </div>



                        </div>
                    </div>

                    <hr />

                    <div className={PrerequisitesStyles.jobInfo}>
                        <div className={PrerequisitesStyles.jobHeader}>Process :</div>

                        <div className={PrerequisitesStyles.jobValue}>



                            <div className="">
                                {driveDetails.process &&
                                    (() => {
                                        const sentences = driveDetails.process.split('. ');
                                        const lastSentence = sentences.pop(); 
                                        return (
                                            <>
                                                {sentences.map((sentence, index) => (
                                                    <div key={index}>-{sentence.trim()}.</div>
                                                ))}
                                                {lastSentence && <div key={sentences.length}>{lastSentence.trim()}.</div>}
                                            </>
                                        );
                                    })()}
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}