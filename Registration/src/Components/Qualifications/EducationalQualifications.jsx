import React, { useState } from "react";
import EducationalQualificationsStyles from "./EducationalQualifications.module.scss"

export default function EducationalQualifications(props) {
    const [showEducationDetails,setShowEducationDetails]=useState(true)
    const [percentage, setPercentage] = useState('');
    const [year, setYear] = useState('');
    const [qualification, setQualification] = useState('');
    const [stream, setStream] = useState("");
    const [college, setCollege] = useState('');
    const [otherCollege, setOtherCollege] = useState("");
    const [location, setLocation] = useState('');
    const notVisible={
        display:"none"
    }
    const educationDetails={
        percentage: percentage,
        year: year,
        qualification: qualification,
        stream: stream,
        college: college === "Others" ? otherCollege : college,
        location: location,
    }
    return (
        <div className={EducationalQualificationsStyles.educationalQualifications} >
            <div className={EducationalQualificationsStyles.dropDown} onClick={()=>setShowEducationDetails(!showEducationDetails)}>
                <span>Educational Qualifications</span>
                <div
                >
                    <img
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
                        <label for="aggregatePercentage">Aggregate Percentage*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="number"
                            id="aggregatePercentage"
                            disabled={props.review}
                            onChange={(e) => {
                                setPercentage(e.target.value);
                              }}
                        />
                    </div>

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label for="passingYear">Year of Passing*</label>
                        <select
                            className={EducationalQualificationsStyles.wSmall}
                            name="passingYear"
                            id="passingYear"
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
                            <label for="qualification">Qualification*</label>
                            <select
                                name="qualification"
                                id="qualification"
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
                            <label for="stream">Stream*</label>
                            <select
                                name="stream"
                                id="stream"
                                disabled={props.review}
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
                            <label for="collegeName">College*</label>
                            <select
                                name="collegeName"
                                id="collegeName"
                                disabled={props.review}
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
                            <label for="otherCollegeName"
                            >If others, please enter your college name</label>
                            <input
                                type="text"
                                name="otherCollageName"
                                id="otherCollageName"
                                disabled={props.review}
                                onChange={(e) => {
                                    setOtherCollege(e.target.value);
                                  }}
                            />
                        </div>
                    </div >

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label for="collegeLocation">Where is your college located?*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="text"
                            id="collegeLocation"
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
