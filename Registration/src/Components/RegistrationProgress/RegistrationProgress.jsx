import React from "react"
import RegistrationProgressStyles from "./RegistrationProgress.module.scss"
export default function RegistrationProgress() {
    return (
    <div className={RegistrationProgressStyles.registrationProgressBar}>
        <div className={RegistrationProgressStyles.registrationProgressDiv}>
            <div className="">
                <div className={RegistrationProgressStyles.registrationProgressNumbers}>1</div>
            </div>
            <div className={RegistrationProgressStyles.registrationProgressLabels}>Personal Information</div>
        </div>
        <div className={RegistrationProgressStyles.registrationProgressLine}>
            
        </div>
        <div className={RegistrationProgressStyles.registrationProgressDiv}>
                <div className={`${RegistrationProgressStyles.registrationProgressNumbersCircle} ${RegistrationProgressStyles.complete}`}>
                    <div className={RegistrationProgressStyles.registrationProgressNumbers}>2</div>
                </div>
                <div className={RegistrationProgressStyles.registrationProgressLabels}>Qualifications</div>
            </div>
        <div className={RegistrationProgressStyles.registrationProgressLine}>
           
        </div>
        <div className={RegistrationProgressStyles.registrationProgressDiv}>
                <div className="">
                    <div className={RegistrationProgressStyles.registrationProgressNumbers}>3</div>
                </div>
                <div className={RegistrationProgressStyles.registrationProgressLabels}>Review and Proceed</div>
            </div>
    </div>
    )
}