import React from "react"
import ReviewStyles from "./Review.module.scss"
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import EducationalQualifications from "../Qualifications/EducationalQualifications";
import ProfessionalQualifications from "../Qualifications/ProfessionalQualifications";
export default function Review() {
  const review = false;
  return <div>
     <div className={ReviewStyles.singleMainHeaderComponent}>
      <div className={ReviewStyles.mainComponentTitle}>Personal Information</div>
      <button
        className={ReviewStyles.mainEditComponent}
      >
        <img src="/assets/icons/edit.png" alt="edit icon" />
        <span >Edit</span>
        <img src="/assets/icons/correct.png" alt="correct icon" />
        <span>Save</span>

      </button>
    </div>
     <PersonalInformation/>
     <div className={ReviewStyles.singleMainHeaderComponent}>
                <div className={ReviewStyles.mainComponentTitle}>Qualifications</div>
                <button
                    className={ReviewStyles.mainEditComponent}
                >
                    <img src="/assets/icons/edit.png" alt="edit icon" />
                    <span>Edit</span>
                    <img src="/assets/icons/correct.png" alt="correct icon" />
                    <span>Save</span>

                </button>
            </div>
     <EducationalQualifications/>
     <ProfessionalQualifications/>
    <div className={ReviewStyles.stepMovingButton}>
      <button
        className={ReviewStyles.nextPreviousButton}
        type="submit"
      >
        PREVIOUS
      </button>
    </div>
  </div>
}