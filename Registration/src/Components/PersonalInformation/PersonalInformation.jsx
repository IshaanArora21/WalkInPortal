import React, { useState } from "react";
import PersonalInformationStyles from "./PersonalInformation.module.scss"
import { useNavigate } from "react-router-dom";
import useRegisterStore from "../../ReactStore/Store"
export default function PersonalInformation(props) {
    const navigateTo = useNavigate();
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        resumeFile,
        setResumeFile,
        portfolioUrl,
        setPortfolioUrl,
        referral,
        setReferral,
        jobMail,
        setJobMail,
        profilePicFile,
        setProfilePicFile,
        countryCode,
        setCountryCode,
        jobRoles,
        setJobRoles,
    } = useRegisterStore();
    const handleNavigate = () => {
        navigateTo('/register/qualification')
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
        <>
            <div className={PersonalInformationStyles.personalInformationContainer}>
                <div className={PersonalInformationStyles.personalInformationForm}>
                    <div className={PersonalInformationStyles.userPicture}>
                        <input
                            id="input_user_image"
                            type="file"
                            accept="image/*"
                            disabled={props.review}
                            onChange={(e) => {
                                const file = e.target.files[0];

                                setProfilePicFile(file.name);
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
                            value={firstName}
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
                            value={lastName}
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
                            value={email}
                            disabled={props.review}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={PersonalInformationStyles.inputSingleContainer}>
                        <label htmlFor="password">Password*</label>
                        <input
                            className={PersonalInformationStyles.inputString}
                            type="text"
                            id="password"
                            value={password}
                            disabled={props.review}
                            onChange={(e) => setPassword(e.target.value)}
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
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                            />
                            <input
                                className={PersonalInformationStyles.phoneNumber}
                                type="number"
                                id="phoneNumber"
                                disabled={props.review}
                                value={phoneNumber}
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
                                setResumeFile(file.name);
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
                            value={portfolioUrl}
                            disabled={props.review}
                            onChange={(e) => setPortfolioUrl(e.target.value)}
                        />
                    </div>

                    <div className={PersonalInformationStyles.preferredJobRoles}>
                        <label>Preferred Job Roles*</label>
                     
                            <div className={PersonalInformationStyles.checkboxSingleContainer}>
                                <input
                                    type="checkbox"
                                    disabled={props.review}
                                    checked={jobRoles.includes("Instructional Designer")}
                                    onChange={() => handleJobChange("Instructional Designer")}
                                />
                                <label className={PersonalInformationStyles.normalLabel}>{"Instructional Designer"}</label>
                            </div>
                            <div className={PersonalInformationStyles.checkboxSingleContainer}>
                                <input
                                    type="checkbox"
                                    disabled={props.review}
                                    checked={jobRoles.includes("Software Engineer")}
                                    onChange={() => handleJobChange("Software Engineer")}
                                />
                                <label className={PersonalInformationStyles.normalLabel}>{"Software Engineer"}</label>
                            </div>
                            <div className={PersonalInformationStyles.checkboxSingleContainer}>
                                <input
                                    type="checkbox"
                                    disabled={props.review}
                                    checked={jobRoles.includes("Software Quality Engineer")}
                                    onChange={() => handleJobChange("Software Quality Engineer")}
                                />
                                <label className={PersonalInformationStyles.normalLabel}>{"Software Quality Engineer"}</label>
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
                            value={referral}
                            onChange={(e) => setReferral(e.target.value)}
                        />
                    </div>

                    <div className={PersonalInformationStyles.checkboxSingleContainer}>
                        <input
                            type="checkbox"
                            id="jobRelatedUpdates"
                            disabled={props.review}
                            value={jobMail}
                            onChange={() => setJobMail(!jobMail)}
                        />
                        <label htmlFor="jobRelatedUpdates" className={PersonalInformationStyles.normalLabel}>
                            Send me job related updates via mail
                        </label>
                    </div>
                </div>
                {!props.review && <div className={PersonalInformationStyles.stepMovingButton}>
                    <button className={`${PersonalInformationStyles.nextPreviousButton} `} onClick={() => handleNavigate()} type="submit">
                        NEXT
                    </button>
                </div>}
            </div>
        </>
    );
}
