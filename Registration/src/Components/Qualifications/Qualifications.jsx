import React from "react"
import QualificationsStyles from "./Qualifications.module.scss"
import EducationalQualifications from "./EducationalQualifications"
import ProfessionalQualifications from "./ProfessionalQualifications"
export default function Qualifications(){
    return (
        <div>
            <EducationalQualifications/>
            
            <ProfessionalQualifications/>
            <div className={QualificationsStyles.stepMovingButton}>
  <button
    class={QualificationsStyles.nextPreviousButton}
    type="submit"
  >
    PREVIOUS
  </button>
  <button className={QualificationsStyles.nextPreviousButton} type="submit">
    NEXT
  </button>
</div>
        </div>
    )
}