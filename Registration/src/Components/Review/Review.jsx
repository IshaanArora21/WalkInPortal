import React, { useState } from "react"
import ReviewStyles from "./Review.module.scss"
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import EducationalQualifications from "../Qualifications/EducationalQualifications";
import ProfessionalQualifications from "../Qualifications/ProfessionalQualifications";
import {useNavigate} from "react-router-dom"
import RegistrationProgress from "../RegistrationProgress/RegistrationProgress";
import CreateAccount from "../CreateAccount/CreateAccount";
export default function Review() {
  const navigate=useNavigate();
  const [isReviewPersonalInformation,setIsReviewPersonalInformation]=useState(true)
  const [isReviewQualifications,setIsReviewQualifications]=useState(true)
  function handlePrevious(){
    navigate("/Qualifications");
  }
  function handleEditPersonalInformation(){
       setIsReviewPersonalInformation(false)
  }
  function handleSavePersonalInformation(){
       setIsReviewPersonalInformation(true)
  }
  function handleEditQualifications(){
    setIsReviewQualifications(false)
}
function handleSaveQualifications(){
    setIsReviewQualifications(true)
}
  return <>
  <CreateAccount/>
  <RegistrationProgress/>
  <div>
     <div className={ReviewStyles.singleMainHeaderComponent}>
      <div className={ReviewStyles.mainComponentTitle}>Personal Information</div>
      <button
        className={ReviewStyles.mainEditComponent}
      >
        <img src="/assets/icons/edit.png" alt="edit icon" onClick={handleEditPersonalInformation}/>
        <span onClick={handleEditPersonalInformation}>Edit</span>
        <img src="/assets/icons/correct.png" alt="correct icon" onClick={handleSavePersonalInformation}/>
        <span onClick={handleSavePersonalInformation}>Save</span>

      </button>
    </div>
     <PersonalInformation review={isReviewPersonalInformation}/>
     <div className={ReviewStyles.singleMainHeaderComponent}>
                <div className={ReviewStyles.mainComponentTitle}>Qualifications</div>
                <button
                    className={ReviewStyles.mainEditComponent}
                >
                    <img onClick={handleEditQualifications}src="/assets/icons/edit.png" alt="edit icon" />
                    <span onClick={handleEditQualifications}>Edit</span>
                    <img onClick={handleSaveQualifications}src="/assets/icons/correct.png" alt="correct icon" />
                    <span onClick={handleSaveQualifications}>Save</span>

                </button>
            </div>
     <EducationalQualifications review={isReviewQualifications}/>
     <ProfessionalQualifications review={isReviewQualifications}/>
    <div className={ReviewStyles.stepMovingButton}>
      <button
        className={ReviewStyles.nextPreviousButton}
        onClick={handlePrevious}
        type="submit"
      >
        PREVIOUS
      </button>
    </div>
  </div>
  </>
}