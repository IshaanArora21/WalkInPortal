import React, { useState } from "react"
import ProfessionalQualificationsStyles from "./ProfessionalQualifications.module.scss"
import useQualificationStore from "../../ReactStore/QualificationsStore";
export default function ProfessionalQualifications(props) {
  const [showQualificationDetails, setShowQualificationDetails] = useState(true)
  const {
    isFresher,
    setIsFresher,
    experienceYear,
    setExperienceYear,
    currentCtc,
    setCurrentCtc,
    expectedCtc,
    setExpectedCtc,
    noticePeriod,
    setNoticePeriod,
    noticeEndDate,
    setNoticeEndDate,
    noticeDuration,
    setNoticeDuration,
    appliedTest,
    setAppliedTest,
    appliedRole,
    setAppliedRole,
    otherExpertiseTechnologies,
    setOtherExpertiseTechnologies,
    otherFamiliarTechnologies,
    setOtherFamiliarTechnologies,
    expertiseTechnology,
    setExpertiseTechnology,
    familiarTechnology,
    setFamiliarTechnology,
  } = useQualificationStore();

  const notVisible = {
    display: 'none'
  }
  function handleFamiliarTechnology(technology) {
    if (familiarTechnology.includes(technology)) {
      setFamiliarTechnology(
        familiarTechnology.filter((selectedFamiliarTechnology) => selectedFamiliarTechnology !== technology)
      )
    }
    else {
      setFamiliarTechnology([technology, ...familiarTechnology])
    }
  }
  function handleExpertiseTechnology(technology) {
    if (expertiseTechnology.includes(technology)) {
      setExpertiseTechnology(expertiseTechnology.filter((selectedExpertiseTechnology) => selectedExpertiseTechnology !== technology))
    }
    else {
      setExpertiseTechnology([technology, ...expertiseTechnology])
    }
  }
  return (
    <>
      <div className={ProfessionalQualificationsStyles.dropDown} onClick={() => setShowQualificationDetails(!showQualificationDetails)}>
        <span>Professional Qualifications</span>
        <div>
          <img
            style={{ cursor: 'pointer' }}
            src={showQualificationDetails ? "/assets/icons/expand_less_black_24dp.svg" : "/assets/icons/arrow-down.svg"}
            alt="expand less/more icon"
          />
        </div>
      </div>
      <div className={ProfessionalQualificationsStyles.stepInputContainer} style={showQualificationDetails ? {} : notVisible}>
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
                  checked={isFresher}
                  onClick={() => {
                    setIsFresher(true);
                  }}
                />
                <label htmlFor="applicantType1">Fresher</label>
              </div>

              <div className={ProfessionalQualificationsStyles.applicantType}>
                <input
                  type="radio"
                  name="applicantType"
                  id="applicantType2"
                  disabled={props.review}
                  checked={!isFresher}
                  onClick={() => {
                    setIsFresher(false);
                  }}
                />
                <label htmlFor="applicantType2">Experienced</label>
              </div>
            </div>
          </div>
        </div>

        {!isFresher &&
          <div className={ProfessionalQualificationsStyles.stepInputs}>
            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label htmlFor="yearsOfExperience">Years of Experience*</label>
              <input
                className={ProfessionalQualificationsStyles.wSmall}
                type="number"
                name="yearsOfExperience"
                id="yearsOfExperience"
                disabled={props.review}
                value={experienceYear}
                onChange={(e) => {
                  setExperienceYear(e.target.value);
                }}
              />
            </div>

            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label htmlFor="currentCTC">Current CTC* (In Rupees)</label>
              <input
                className={ProfessionalQualificationsStyles.wSmall}
                type="text"
                name="currentCTC"
                id="currentCTC"
                disabled={props.review}
                value={currentCtc}
                onChange={(e) => {
                  setCurrentCtc(e.target.value);
                }}
              />
            </div>

            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label htmlFor="expectedCTC">Expected CTC* (In Rupees)</label>
              <input
                className={ProfessionalQualificationsStyles.wSmall}
                type="text"
                name="expectedCTC"
                id="expectedCTC"
                value={expectedCtc}
                disabled={props.review}
                onChange={(e) => {
                  setExpectedCtc(e.target.value);
                }}
              />
            </div>

            <div className={ProfessionalQualificationsStyles.technologiesContainer}>
              <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
              >Select All The Technologies You Expertise In*</span>

             
                <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                  <input
                    type="checkbox"
                    id={`technology_`}
                    disabled={props.review}
                    checked={expertiseTechnology.includes("Javascript")}
                    onChange={() => handleExpertiseTechnology('Javascript')}
                  />
                  <label htmlFor={`technology_`}>{'Javascript'}</label>
                </div>
                <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                  <input
                    type="checkbox"
                    id={`technology_`}
                    checked={expertiseTechnology.includes("Angular JS")}
                    disabled={props.review}
                    onChange={() => handleExpertiseTechnology('Angular JS')}
                  />
                  <label htmlFor={`technology_`}>{'Angular JS'}</label>
                </div>
                <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                  <input
                    type="checkbox"
                    id={`technology_`}
                    disabled={props.review}
                    checked={expertiseTechnology.includes("Node JS")}
                    onChange={() => handleExpertiseTechnology('Node JS')}
                  />
                  <label htmlFor={`technology_`}>{'Node JS'}</label>
                </div>
                <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                  <input
                    type="checkbox"
                    id={`technology_`}
                    disabled={props.review}
                    checked={expertiseTechnology.includes("React")}
                    onChange={() => handleExpertiseTechnology('React')}
                  />
                  <label htmlFor={`technology_`}>{'React'}</label>
                </div>
            


              <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
                <label htmlFor="e_otherTechnologies">If others, please mention</label>
                <input
                  className={ProfessionalQualificationsStyles.specificWidth}
                  type="text"
                  name="e_otherTechnologies"
                  id="e_otherTechnologies"
                  disabled={props.review}
                  value={otherExpertiseTechnologies}
                  onChange={(e) => {
                    setOtherExpertiseTechnologies(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        }
        <div className={ProfessionalQualificationsStyles.stepInputs}>
          <div className={ProfessionalQualificationsStyles.technologiesContainer}>
            <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
            >Select All The Technologies You Are Familiar In</span>




            
              <div  className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                <input
                  type="checkbox"
                  id={`technology_`}
                  disabled={props.review}
                  checked={familiarTechnology.includes("Javascript")}
                  onChange={() => handleFamiliarTechnology("Javascript")}
                />
                <label htmlFor={`technology_`}>{"Javascript"}</label>
              </div>
              <div  className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                <input
                  type="checkbox"
                  id={`technology_`}
                  disabled={props.review}
                  checked={familiarTechnology.includes("Angular JS")}
                  onChange={() => handleFamiliarTechnology("Angular JS")}
                />
                <label htmlFor={`technology_`}>{"Angular JS"}</label>
              </div>
              <div  className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                <input
                  type="checkbox"
                  id={`technology_`}
                  disabled={props.review}
                  checked={familiarTechnology.includes("Node JS")}
                  onChange={() => handleFamiliarTechnology("Node JS")}
                />
                <label htmlFor={`technology_`}>{"Node JS"}</label>
              </div>
              <div  className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                <input
                  type="checkbox"
                  id={`technology_`}
                  disabled={props.review}
                  checked={familiarTechnology.includes("React")}
                  onChange={() => handleFamiliarTechnology("React")}
                />
                <label htmlFor={`technology_`}>{"React"}</label>
              </div>


            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label htmlFor="f_otherTechnologies">If others, please mention</label>
              <input
                className={ProfessionalQualificationsStyles.specificWidth}
                type="text"
                name="f_otherTechnologies"
                id="f_otherTechnologies"
                disabled={props.review}
                value={otherFamiliarTechnologies}
                onChange={(e) => {
                  setOtherFamiliarTechnologies(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        {!isFresher &&
          <div className={ProfessionalQualificationsStyles.stepInputs}>
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
                      checked={noticePeriod}
                      onChange={() => {
                        setNoticePeriod(true);
                      }}
                    />
                    <label htmlFor="isInNoticePeriod">Yes</label>
                  </div>

                  <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                    <input
                      type="radio"
                      name="isInNoticePeriod"
                      disabled={props.review}
                      checked={!noticePeriod}
                      onChange={() => {
                        setNoticePeriod(false);
                      }}
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
                    value={noticeEndDate}
                    onChange={(e) => {
                      setNoticeEndDate(e.target.value);
                    }}
                  />
                </div>

                <div className={ProfessionalQualificationsStyles.singleInputContainer}>
                  <label htmlFor="noticePeriodLength"
                  >How long is your notice period?* (Mention in months)</label>
                  <select
                    name="noticePeriodLength"
                    id="noticePeriodLength"
                    disabled={props.review}
                    value={noticeDuration}
                    onChange={(e) => {
                      setNoticeDuration(e.target.value);
                    }}
                  >
                    <option value="0">0 months</option>
                    <option value="1">1 months</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        }
        <div className={ProfessionalQualificationsStyles.stepInputs}>
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
                    checked={appliedTest}
                    onChange={() => setAppliedTest(true)}
                  />
                  <label htmlFor="isAppearedInTestByZeus_yes">Yes</label>
                </div>

                <div className={ProfessionalQualificationsStyles.singleRadioContainer}>
                  <input
                    type="radio"
                    name="isAppearedInTestByZeus"
                    id="isAppearedInTestByZeus_no"
                    disabled={props.review}
                    checked={!appliedTest}
                    onChange={() => setAppliedTest(false)}
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
                value={appliedRole}
                onChange={(e) => {
                  setAppliedRole(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}