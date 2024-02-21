import React from "react"
import ProfessionalQualificationsStyles from "./ProfessionalQualifications.module.scss"
export default function ProfessionalQualifications(props) {
    const isExperienced=false;
    return(
    <div>
    <div className={ProfessionalQualificationsStyles.dropDown}>
      <span>Professional Qualifications</span>
      <div>
        <img
          src="/assets/icons/expand_less_black_24dp.svg"
          alt="expand less/more icon"
        />
      </div>
    </div>

    <div className={ProfessionalQualificationsStyles.stepInputContainer}>
      <div className={`${ProfessionalQualificationsStyles.stepInputs}`}>
        <div className={ProfessionalQualificationsStyles.singleInputContainer}>
          <label htmlFor="applicantType">Applicant Type*</label>
          <div className={ProfessionalQualificationsStyles.applicantTypeContainer}>
            <div className={ProfessionalQualificationsStyles.applicantType}>
              <input
                type="radio"
                name="applicantType"
                id="applicantType1"
                disabled={props.review}
              />
              <label htmlFor="applicantType1">Fresher</label>
            </div>

            <div className={ProfessionalQualificationsStyles.applicantType}>
              <input
                type="radio"
                name="applicantType"
                id="applicantType2"
                disabled={props.review}
              />
              <label htmlFor="applicantType2">Experienced</label>
            </div>
          </div>
        </div>
      </div>
{isExperienced ? 
          <div className={ProfessionalQualificationsStyles.stepInputs}>
          <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
            <label for="yearsOfExperience">Years of Experience*</label>
            <input
            className={ProfessionalQualificationsStyles.wSmall}
              type="number"
              name="yearsOfExperience"
              id="yearsOfExperience"
              disabled={props.review}
            />
          </div>
      
          <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
            <label for="currentCTC">Current CTC* (In Rupees)</label>
            <input
              className={ProfessionalQualificationsStyles.wSmall}
              type="text"
              name="currentCTC"
              id="currentCTC"
              disabled={props.review}
            />
          </div>
      
          <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
            <label for="expectedCTC">Expected CTC* (In Rupees)</label>
            <input
            className={ProfessionalQualificationsStyles.wSmall}
              type="text"
              name="expectedCTC"
              id="expectedCTC"
              disabled={props.review}
            />
          </div>
      
          <div className={ProfessionalQualificationsStyles.technologiesContainer}>
            <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
              >Select All The Technologies You Expertise In*</span>
      
            <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
              <input
                type="checkbox"
                id="e_technology"
                disabled={props.review}
              />
              <label htmlFor="e_technology">{}</label>
            </div>
            
      
            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label for="e_otherTechnologies">If others, please mention</label>
              <input
              className={ProfessionalQualificationsStyles.specificWidth}
                type="text"
                name="e_otherTechnologies"
                id="e_otherTechnologies"
                disabled={props.review}
              />
            </div>
          </div>
      
          <div className={ProfessionalQualificationsStyles.technologiesContainer}>
            <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
              >Select All The Technologies You Are Familiar In</span>
      
      
      
            
            <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
              <input
                type="checkbox"
                id="f_ + technology"
                disabled={props.review}
              />
              <label htmlFor="f_technology">{}</label>
            </div>
            
      
            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label for="f_otherTechnologies">If others, please mention</label>
              <input
              className={ProfessionalQualificationsStyles.specificWidth}
                type="text"
                name="f_otherTechnologies"
                id="f_otherTechnologies"
                disabled={props.review}
              />
            </div>
          </div>
      
          <div className={ProfessionalQualificationsStyles.flex16}>
            <div className={ProfessionalQualificationsStyles.radioConatiner}>
              <span className={ProfessionalQualificationsStyles.radioContainerLabel}
                >Are you currently on notice period?*</span>
              <div className={ProfessionalQualificationsStyles.radioContainerOptions}>
                <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                  <input
                    type="radio"
                    name="isInNoticePeriod"
                    disabled={props.review}
                  />
                  <label htmlFor="isInNoticePeriod">Yes</label>
                </div>
      
                <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                  <input
                    type="radio"
                    name="isInNoticePeriod"
                    disabled={props.review}
                  />
                  <label htmlFor="isInNoticePeriod">No</label>
                </div>
              </div>
            </div>
      
            <div className={ProfessionalQualificationsStyles.doubleInputContainer}>
              <div className={ProfessionalQualificationsStyles.singleInputContainer}>
                <label htmlFor="noticePeriodEnd"
                  >If Yes, when will your notice period end?*</label>
                <input
                  type="date"
                  name="noticePeriodEnd"
                  id="noticePeriodEnd"
                  disabled={props.review}
                />
              </div>
      
              <div className={ProfessionalQualificationsStyles.singleInputContainer}>
                <label htmlFor="noticePeriodLength"
                  >How long is your notice period?* (Mention in months)</label>
                <select
                  name="noticePeriodLength"
                  id="noticePeriodLength"
                  disabled={props.review}
                >
                  <option value="0">0 months</option>
                  <option value="1">1 months</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                </select>
              </div>
            </div>
          </div>
      
          <div className={ProfessionalQualificationsStyles.flex16}>
            <div className={ProfessionalQualificationsStyles.radioConatiner}>
              <span className={ProfessionalQualificationsStyles.radioContainerLabel}
                >Have You Appeared For Any Test By Zeus in the past 12 months?*</span>
              <div className={ProfessionalQualificationsStyles.radioContainerOptions}>
                <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                  <input
                    type="radio"
                    name="isAppearedInTestByZeus"
                    id="isAppearedInTestByZeus_yes"
                    disabled={props.review}
                  />
                  <label htmlFor="isAppearedInTestByZeus_yes">Yes</label>
                </div>
      
                <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                  <input
                    type="radio"
                    name="isAppearedInTestByZeus"
                    id="isAppearedInTestByZeus_no"
                    disabled={props.review}
                  />
                  <label htmlFor="isAppearedInTestByZeus_no">No</label>
                </div>
              </div>
            </div>
      
            <div className={ProfessionalQualificationsStyles.singleInputContainer}>
              <label for="appearedRoleName"
                >If Yes, which role did you apply for?</label>
              <input
                className={ProfessionalQualificationsStyles.specificWidth}
                type="text"
                name="appearedRoleName"
                id="appearedRoleName"
                disabled={props.review}
              />
            </div>
          </div>
        </div>
      
  : 
            <div className={ProfessionalQualificationsStyles.stepInputs}>
    <div className={ProfessionalQualificationsStyles.technologiesContainer}>
      <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
        >Select All The Technologies You Are Familiar In</span>

      <div className="single_checkbox_container">
        <input
          type="checkbox"
          id="f_technology"
          disabled={props.review}
        />
        <label htmlFor="f_technology">{}</label>
      </div>

      <div className={ProfessionalQualificationsStyles.singleInputContainer}>
        <label for="otherTechnologies">If others, please mention</label>
        <input
        className={ProfessionalQualificationsStyles.specificWidth}
          type="text"
          name="otherTechnologies"
          id="otherTechnologies"
          disabled={props.review}
        />
      </div>
    </div>

    <div className={ProfessionalQualificationsStyles.flex16}>
      <div className={ProfessionalQualificationsStyles.radioConatiner}>
        <span className={ProfessionalQualificationsStyles.radioContainerLabel}
          >Have You Appeared For Any Test By Zeus in the past 12 months?*</span>
        <div className={ProfessionalQualificationsStyles.radioContainerOptions}>
          <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
            <input
              type="radio"
              name="isAppearedInTestByZeus"
              id="isAppearedInTestByZeus_yes"
              disabled={props.review}
            />
            <label htmlFor="isAppearedInTestByZeus_yes">Yes</label>
          </div>

          <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
            <input
              type="radio"
              name="isAppearedInTestByZeus"
              id="isAppearedInTestByZeus_no"
              disabled={props.review}
            />
            <label htmlFor="isAppearedInTestByZeus_no">No</label>
          </div>
        </div>
      </div>

      <div className={ProfessionalQualificationsStyles.singleInputContainer}>
        <label htmlFor="appearedRoleName"
          >If Yes, which role did you apply for?</label>
        <input
          className={ProfessionalQualificationsStyles.specificWidth}
          type="text"
          name="appearedRoleName"
          id="appearedRoleName"
          disabled={props.review}
        />
      </div>
    </div>
  </div>

        }
 
</div>

</div>
    )
}