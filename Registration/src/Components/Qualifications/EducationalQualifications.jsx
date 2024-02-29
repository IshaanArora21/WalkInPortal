import React, { useState } from "react";
import EducationalQualificationsStyles from "./EducationalQualifications.module.scss"
import useQualificationStore from "../../ReactStore/QualificationsStore"
export default function EducationalQualifications(props) {
    const [showEducationDetails,setShowEducationDetails]=useState(true)
    const {
        percentage,
        year,
        qualification,
        stream,
        college,
        otherCollege,
        location,
        setPercentage,
        setYear,
        setQualification,
        setStream,
        setCollege,
        setOtherCollege,
        setLocation,
      } = useQualificationStore();
    const notVisible={
        display:"none"
    }
    return (
        <div className={EducationalQualificationsStyles.educationalQualifications} >
            <div className={EducationalQualificationsStyles.dropDown} onClick={()=>setShowEducationDetails(!showEducationDetails)}>
                <span>Educational Qualifications</span>
                <div
                >
                    <img
                        style={{cursor:'pointer'}}
                        src={showEducationDetails?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
                        alt="expand less/more icon"
                    />
                </div>
            </div>

            <div
                className={EducationalQualificationsStyles.stepInputContainer} style={showEducationDetails?{}:notVisible}
            >
                <div className={EducationalQualificationsStyles.stepInputs}>
                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label htmlFor="aggregatePercentage">Aggregate Percentage*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="number"
                            id="aggregatePercentage"
                            disabled={props.review}
                            value={percentage}
                            onChange={(e) => {
                                setPercentage(e.target.value);
                              }}
                        />
                    </div>

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label htmlFor="passingYear">Year of Passing*</label>
                        <select
                            className={EducationalQualificationsStyles.wSmall}
                            name="passingYear"
                            id="passingYear"
                            value={year}
                            disabled={props.review}
                            onChange={(e) => {
                                setYear(e.target.value);
                              }}
                        >
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                        </select>
                    </div>

                    <div className={EducationalQualificationsStyles.doubleInputContainer}>
                        <div className={EducationalQualificationsStyles.singleInputContainer}>
                            <label htmlFor="qualification">Qualification*</label>
                            <select
                                name="qualification"
                                id="qualification"
                                value={qualification}
                                disabled={props.review}
                                onChange={(e) => {
                                    setQualification(e.target.value);
                                    
                                  }}
                            >
                                <option value="Bachelor in Technology (B.Tech)">
                                    Bachelor in Technology (B.Tech)
                                </option>
                            </select>
                        </div>

                        <div className={EducationalQualificationsStyles.singleInputContainer}>
                            <label htmlFor="stream">Stream*</label>
                            <select
                                name="stream"
                                id="stream"
                                disabled={props.review}
                                value={stream}
                                onChange={(e) => {
                                    setStream(e.target.value);
                                  }}
                            >
                                <option value="Information Technology">
                                    Information Technology
                                </option>
                            </select>
                        </div >
                    </div >

                    <div className={EducationalQualificationsStyles.doubleInputContainer}>
                        <div className={EducationalQualificationsStyles.singleInputContainer}>
                            <label htmlFor="collegeName">College*</label>
                            <select
                                name="collegeName"
                                id="collegeName"
                                disabled={props.review}
                                value={college}
                                onChange={(e) => {
                                    setCollege(e.target.value);
                                  }}
                            >
                                <option value="Pune Institute of Technology (PIT)">
                                    Pune Institute of Technology (PIT)
                                </option>
                            </select>
                        </div>

                        <div className={EducationalQualificationsStyles.singleInputContainer}>
                            <label htmlFor="otherCollegeName"
                            >If others, please enter your college name</label>
                            <input
                                type="text"
                                name="otherCollageName"
                                id="otherCollageName"
                                disabled={props.review}
                                value={otherCollege}
                                onChange={(e) => {
                                    setOtherCollege(e.target.value);
                                  }}
                            />
                        </div>
                    </div >

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label htmlFor="collegeLocation">Where is your college located?*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="text"
                            id="collegeLocation"
                            value={location}
                            disabled={props.review}
                            onChange={(e) => {
                                setLocation(e.target.value);
                              }}
                        />
                    </div>
                </div >
            </div >
        </div >
    );
}
