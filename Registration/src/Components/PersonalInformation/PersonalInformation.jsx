import React ,{useState}from "react";
import PersonalInformationStyles from "./PersonalInformation.module.scss"
export default function PersonalInformation() {
    const [pictureUploaded,setPictureUploaded]=useState(false);
    function handlePictureUploaded(){
        setPictureUploaded(!pictureUploaded)
    }
    return (
        <div className={PersonalInformationStyles.personalInformationContainer}>
            <div className={PersonalInformationStyles.personalInformationForm}>
                <div className={PersonalInformationStyles.userPicture}>
                    <input
                        id="input_user_image"
                        type="file"
                        accept="image/*"
                    />
                    <label htmlFor={PersonalInformationStyles.userPictureInput}>
                        <img
                            className={PersonalInformationStyles.displayPicture}
                            alt="User Image"
                        />
                        <img
                            className={PersonalInformationStyles.displayPicture}
                            src="/assets/icons/account_circle.svg"
                            alt="User Image Icon"
                        />
                        <div className={PersonalInformationStyles.userPictureTitle}>CHANGE</div>
                        <div className={PersonalInformationStyles.userPictureInfo}>Max. image size: 5 MB</div>
                    </label>
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="text"
                        id="firstName"
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="text"
                        id="lastName"
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="email">Email*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="email"
                        id="email"
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <div className={PersonalInformationStyles.phoneNumberContainer}>
                        <div className={PersonalInformationStyles.addText}>+</div>
                        <input
                            className={PersonalInformationStyles.countryCode}
                            type="number"
                            id="countryCode"
                        />
                        <input
                            className={PersonalInformationStyles.phoneNumber}
                            type="number"
                            id="phoneNumber"
                        />
                    </div>
                </div>

                <div className={PersonalInformationStyles.uploadResumeContainer}>
                    <label className={PersonalInformationStyles.inputFileLabel} htmlFor="inputFile">
                        <img
                            src="/assets/icons/Upload_black_24dp.svg"
                            alt="Upload Resume Icon"
                        />
                        UPLOAD RESUME
                    </label>
                    <input
                        type="file"
                        accept=".pdf"
                        id="inputFile"
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="portfolio">Enter Portfolio URL (if any)</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="url"
                        id="portfolio"
                    />
                </div>

                <div className={PersonalInformationStyles.preferredJobRoles}>
                    <label>Preferred Job Roles*</label>
                    <div className={PersonalInformationStyles.checkboxSingleContainer}>
                        <input type="checkbox" />
                        <label className={PersonalInformationStyles.normalLabel}>Role 1</label>
                    </div>
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="referralName" className={PersonalInformationStyles.referralLabel}>
                        If You Are Registering Via A Referral, Please Mention Full Name Of The
                        Employee Who Referred You
                    </label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="text"
                        id="referralName"
                    />
                </div>

                <div className={PersonalInformationStyles.checkboxSingleContainer}>
                    <input
                        type="checkbox"
                        id="jobRelatedUpdates"
                    />
                    <label htmlFor="jobRelatedUpdates" className={PersonalInformationStyles.normalLabel}>
                        Send me job related updates via mail
                    </label>
                </div>
            </div>
            <div className={PersonalInformationStyles.stepMovingButton}>
                <button className={PersonalInformationStyles.nextPreviousButton} type="submit">
                    NEXT
                </button>
            </div>
        </div>
    );
}
