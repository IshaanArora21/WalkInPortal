import React from "react";
import EducationalQualificationsStyles from "./EducationalQualifications.module.scss"

export default function EducationalQualifications() {
    return (
        <div className={EducationalQualificationsStyles.educationalQualifications}>
            <div className={EducationalQualificationsStyles.dropDown}>
                <span>Educational Qualifications</span>
                <div
                >
                    <img
                        src="/assets/icons/expand_less_black_24dp.svg"
                        alt="expand less/more icon"
                    />
                </div>
            </div>

            <div
                className={EducationalQualificationsStyles.stepInputContainer}
            >
                <div className={EducationalQualificationsStyles.stepInputs}>
                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label for="aggregatePercentage">Aggregate Percentage*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="number"
                            id="aggregatePercentage"
                        />
                    </div>

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label for="passingYear">Year of Passing*</label>
                        <select
                            className={EducationalQualificationsStyles.wSmall}
                            name="passingYear"
                            id="passingYear"
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
                            />
                        </div>
                    </div >

                    <div className={EducationalQualificationsStyles.singleInputContainer}>
                        <label for="collegeLocation">Where is your college located?*</label>
                        <input
                            className={EducationalQualificationsStyles.wSmall}
                            type="text"
                            id="collegeLocation"
                        />
                    </div>
                </div >
            </div >
        </div >
    );
}
