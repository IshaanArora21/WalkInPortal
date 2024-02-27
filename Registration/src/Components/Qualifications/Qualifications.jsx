import React from "react"
import QualificationsStyles from "./Qualifications.module.scss"
import EducationalQualifications from "./EducationalQualifications"
import ProfessionalQualifications from "./ProfessionalQualifications"
import RegistrationProgress from "../RegistrationProgress/RegistrationProgress"
import { useNavigate } from "react-router-dom";
export default function Qualifications(props){
    const navigate=useNavigate();
    function handleNext(){
         navigate("/register/review")
    }
    function handlePrevious(){
         navigate("/register")
    }
    return (
        <div>
            <EducationalQualifications review={props.review}/>
            
            <ProfessionalQualifications review={props.review}/>
          { !props.review && <div className={QualificationsStyles.stepMovingButton}>
  <button
    className={QualificationsStyles.nextPreviousButton}
    onClick={handlePrevious}
    type="submit"
  >
    PREVIOUS
  </button>
  <button className={QualificationsStyles.nextPreviousButton} onClick={handleNext}type="submit">
    NEXT
  </button>
</div>}
        </div>
    )
}