import React, { useState } from "react";
import PersonalInformationStyles from "./PersonalInformation.module.scss"
import { useNavigate } from "react-router-dom";

export default function PersonalInformation(props) {
    const navigateTo = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [resumeFile, setResumeFile] = useState(null);
    const [portfolioUrl, setPortfolioUrl] = useState("");
    const [referral, setReferral] = useState("");
    const [jobMailUpdates, setJobMailUpdates] = useState(true);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [countryCode, setCountryCode] = useState("");
    const [jobRoles, setJobRoles] = useState([
        "Instructional Designer",
        "Software Quality Engineer",
        "Software Engineer"
    ]);
    const personalInformation = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: countryCode + phoneNumber + "",
        resumeFile: resumeFile,
        portfolioUrl: portfolioUrl,
        referral: referral,
        jobMailUpdates: jobMailUpdates,
        profilePicFile: profilePicFile,
        jobRoles: jobRoles,

    }
    const handleNavigate = () => {
        navigateTo('/Qualifications')
    }
    function handleJobChange(newRole) {
        if (jobRoles.includes(newRole)) {
            setJobRoles(jobRoles.filter((selectedJobRole) => selectedJobRole !== newRole))
        }
        else {
            setJobRoles([newRole, ...jobRoles])
        }
    }
    return (
        <div className={PersonalInformationStyles.personalInformationContainer}>
            <div className={PersonalInformationStyles.personalInformationForm}>
                <div className={PersonalInformationStyles.userPicture}>
                    <input
                        id="input_user_image"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        disabled={props.review}
                        onChange={(e) => {
                            const file = e.target.files[0];

                            setProfilePicFile(file);
                        }}
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
                        {profilePicFile &&
                            <div>
                                <div className={PersonalInformationStyles.userPictureTitle}>CHANGE</div>
                                <div className={PersonalInformationStyles.userPictureInfo}>Max. image size: 5 MB</div>
                            </div>

                        }
                    </label>
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="text"
                        id="firstName"
                        disabled={props.review}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="text"
                        id="lastName"
                        disabled={props.review}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="email">Email*</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="email"
                        id="email"
                        disabled={props.review}
                        onChange={(e) => setEmail(e.target.value)}
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
                            disabled={props.review}
                            onChange={(e) => setCountryCode(e.target.value)}
                        />
                        <input
                            className={PersonalInformationStyles.phoneNumber}
                            type="number"
                            id="phoneNumber"
                            disabled={props.review}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                        style={{ display: 'none' }}
                        disabled={props.review}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setResumeFile(file);
                        }}
                    />
                    {resumeFile && (
                        <div className="">{resumeFile.name}</div>
                    )}
                </div>

                <div className={PersonalInformationStyles.inputSingleContainer}>
                    <label htmlFor="portfolio">Enter Portfolio URL (if any)</label>
                    <input
                        className={PersonalInformationStyles.inputString}
                        type="url"
                        id="portfolio"
                        disabled={props.review}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                    />
                </div>

                <div className={PersonalInformationStyles.preferredJobRoles}>
                    <label>Preferred Job Roles*</label>
                    <div className={PersonalInformationStyles.checkboxSingleContainer}>
                        <input type="checkbox" disabled={props.review} onChange={handleJobChange(`jobrole`)} />
                        <label className={PersonalInformationStyles.normalLabel}>jobrole</label>
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
                        disabled={props.review}
                        onChange={(e) => setReferral(e.target.value)}
                    />
                </div>

                <div className={PersonalInformationStyles.checkboxSingleContainer}>
                    <input
                        type="checkbox"
                        id="jobRelatedUpdates"
                        disabled={props.review}
                        onChange={() => setJobMailUpdates(!jobMailUpdates)}
                    />
                    <label htmlFor="jobRelatedUpdates" className={PersonalInformationStyles.normalLabel}>
                        Send me job related updates via mail
                    </label>
                </div>
            </div>
            {!props.review && <div className={PersonalInformationStyles.stepMovingButton}>
                <button className={`${PersonalInformationStyles.nextPreviousButton} `} onClick={handleNavigate} type="submit">
                    NEXT
                </button>
            </div>}
        </div>
    );
}
