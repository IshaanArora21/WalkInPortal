import React, {useState} from "react"
import ProfessionalQualificationsStyles from "./ProfessionalQualifications.module.scss"
export default function ProfessionalQualifications(props) {
  const [showQualificationDetails, setShowQualificationDetails] = useState(true)
  const [isFresher, setIsFresher] = useState(false);
  const [experienceYear, setExperienceYear] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");
  const [expectedCtc, setExpectedCtc] = useState("");
  const [noticePeriod, setNoticePeriod] = useState(false);
  const [noticeEndDate, setNoticeEndDate] = useState("");
  const [noticeDuration, setNoticeDuration] = useState("");
  const [appliedTest, setAppliedTest] = useState(false);
  const [appliedRole, setAppliedRole] = useState("");
  const [otherExpertiseTechnologies, setOtherExpertiseTechnologies] =
    useState("");
  const [otherFamiliarTechnologies, setOtherFamiliarTechnologies] =
    useState("");
  const [expertiseTechnology, setExpertiseTechnology] = useState([
    "Javascript",
  ]);
  const [familiarTechnology, setFamiliarTechnology] = useState([
    "Angular JS",
    "Node JS",
  ]);
  const notVisible={
    display:'none'
  }
  const professionalQualifications={
    applicantType: isFresher ? "fresher" : "experienced",
    experienceYear: isFresher ? "0" : experienceYear,
    currentCtc: isFresher ? "0" : currentCtc,
    expectedCtc: isFresher ? "0" : expectedCtc,
    // If fresher then no expertise
    expertiseTechnology: isFresher ? [] : expertiseTechnology, 
    familiarTechnology: familiarTechnology,
    noticePeriod: noticePeriod,
    noticeEndDate: noticeEndDate,
    noticeDuration: noticeDuration,
    appliedTest: appliedTest,
    appliedRole: appliedRole,
  }
  function handleFamiliarTechnology(technology){
    if(familiarTechnology.includes(technology)){
      setFamiliarTechnology(
        familiarTechnology.filter((selectedFamiliarTechnology)=>selectedFamiliarTechnology!==technology)
      )
    }
    else{
        setFamiliarTechnology([technology,...familiarTechnology])
    }
  }
  function handleExpertiseTechnology(technology){
     if(expertiseTechnology.includes(technology)){
        setExpertiseTechnology(expertiseTechnology.filter((selectedExpertiseTechnology)=>selectedExpertiseTechnology!==technology))
     }
     else{
       setExpertiseTechnology([technology,...expertiseTechnology])
     }
  }
  return (
    <div>
      <div className={ProfessionalQualificationsStyles.dropDown} onClick={()=>setShowQualificationDetails(!showQualificationDetails)}>
        <span>Professional Qualifications</span>
        <div>
          <img
            src={showQualificationDetails?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
            alt="expand less/more icon"
          />
        </div>
      </div>

      <div className={ProfessionalQualificationsStyles.stepInputContainer} style={showQualificationDetails?{}:notVisible}>
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
                  onClick={() => {
                    setIsFresher(false);
                  }}
                />
                <label htmlFor="applicantType2">Experienced</label>
              </div>
            </div>
          </div>
        </div>
        {!isFresher ?
          <div className={ProfessionalQualificationsStyles.stepInputs}>
            <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
              <label for="yearsOfExperience">Years of Experience*</label>
              <input
                className={ProfessionalQualificationsStyles.wSmall}
                type="number"
                name="yearsOfExperience"
                id="yearsOfExperience"
                disabled={props.review}
                onChange={(e) => {
                  setExperienceYear(e.target.value);
                }}
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
                onChange={(e) => {
                  setCurrentCtc(e.target.value);
                }}
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
                  id="e_technology"
                  disabled={props.review}
                  onChange={() => handleExpertiseTechnology()}
                />
                <label htmlFor="e_technology">{ }</label>
              </div>


              <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
                <label for="e_otherTechnologies">If others, please mention</label>
                <input
                  className={ProfessionalQualificationsStyles.specificWidth}
                  type="text"
                  name="e_otherTechnologies"
                  id="e_otherTechnologies"
                  disabled={props.review}
                  onChange={(e) => {
                    setOtherExpertiseTechnologies(e.target.value);
                  }}
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
                  onChange={() => handleFamiliarTechnology()}
                />
                <label htmlFor="f_technology">{ }</label>
              </div>


              <div className={`${ProfessionalQualificationsStyles.singleInputContainer}`}>
                <label for="f_otherTechnologies">If others, please mention</label>
                <input
                  className={ProfessionalQualificationsStyles.specificWidth}
                  type="text"
                  name="f_otherTechnologies"
                  id="f_otherTechnologies"
                  disabled={props.review}
                  onChange={(e) => {
                    setOtherFamiliarTechnologies(e.target.value);
                  }}
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
                      onChange={() => setAppliedTest(false)}
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
                  onChange={(e) => {
                    setAppliedRole(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          :
          <div className={ProfessionalQualificationsStyles.stepInputs}>
            <div className={ProfessionalQualificationsStyles.technologiesContainer}>
              <span className={ProfessionalQualificationsStyles.technologiesContainerLabel}
              >Select All The Technologies You Are Familiar In</span>

              <div className={ProfessionalQualificationsStyles.singleCheckboxContainer}>
                <input
                  type="checkbox"
                  id="f_technology"
                  disabled={props.review}
                  onChange={() => handleFamiliarTechnology()}
                 
                />
                <label htmlFor="f_technology">{ }</label>
              </div>

              <div className={ProfessionalQualificationsStyles.singleInputContainer}>
                <label for="otherTechnologies">If others, please mention</label>
                <input
                  className={ProfessionalQualificationsStyles.specificWidth}
                  type="text"
                  name="otherTechnologies"
                  id="otherTechnologies"
                  disabled={props.review}
                  onChange={(e) => {
                    setOtherFamiliarTechnologies(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setAppliedRole(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

        }

      </div>

    </div>
  )
}