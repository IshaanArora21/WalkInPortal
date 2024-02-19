import React from "react"
import ProfessionalInformation from "./ProfessionalInformation.scss"
export default function ProfessionalInformation() {
    const isExperienced=false;
    return(
    <div>
    <div className="dropDown">
      <span>Professional Qualifications</span>
      <div>
        <img
          src="/assets/icons/expand_less_black_24dp.svg"
          alt="expand less/more icon"
        />
      </div>
    </div>

    <div className="step_input_container">
      <div className="step_inputs mb-8">
        <div className="single_input_container">
          <label htmlFor="applicantType">Applicant Type*</label>
          <div className="applicant_type_container">
            <div className="applicant_type">
              <input
                type="radio"
                name="applicantType"
                id="applicantType1"
              />
              <label htmlFor="applicantType1">Fresher</label>
            </div>

            <div className="applicant_type">
              <input
                type="radio"
                name="applicantType"
                id="applicantType2"
              />
              <label htmlFor="applicantType2">Experienced</label>
            </div>
          </div>
        </div>
      </div>
{isExperienced ? 
          <div className="step_inputs">
          <div className="single_input_container w_small">
            <label for="yearsOfExperience">Years of Experience*</label>
            <input
              type="number"
              name="yearsOfExperience"
              id="yearsOfExperience"
            />
          </div>
      
          <div className="single_input_container w_small">
            <label for="currentCTC">Current CTC* (In Rupees)</label>
            <input
              type="text"
              name="currentCTC"
              id="currentCTC"
            />
          </div>
      
          <div className="single_input_container w_small">
            <label for="expectedCTC">Expected CTC* (In Rupees)</label>
            <input
              type="text"
              name="expectedCTC"
              id="expectedCTC"
            />
          </div>
      
          <div className="technologies_container">
            <span className="technologies_container_label"
              >Select All The Technologies You Expertise In*</span>
      
            <div className="single_checkbox_container">
              <input
                type="checkbox"
                id="e_technology"
              />
              <label htmlFor="e_technology">{}</label>
            </div>
            
      
            <div className="single_input_container specific_width">
              <label for="e_otherTechnologies">If others, please mention</label>
              <input
                type="text"
                name="e_otherTechnologies"
                id="e_otherTechnologies"
              />
            </div>
          </div>
      
          <div className="technologies_container">
            <span className="technologies_container_label"
              >Select All The Technologies You Are Familiar In</span>
      
      
      
            
            <div className="single_checkbox_container">
              <input
                type="checkbox"
                id="f_ + technology"
              />
              <label htmlFor="f_technology">{}</label>
            </div>
            
      
            <div className="single_input_container specific_width">
              <label for="f_otherTechnologies">If others, please mention</label>
              <input
                type="text"
                name="f_otherTechnologies"
                id="f_otherTechnologies"
              />
            </div>
          </div>
      
          <div className="flex_16">
            <div className="radio_container">
              <span className="radio_container_label"
                >Are you currently on notice period?*</span>
              <div className="radio_container_options">
                <div className="single_radio_container">
                  <input
                    type="radio"
                    name="isInNoticePeriod"
                  />
                  <label htmlFor="isInNoticePeriod">Yes</label>
                </div>
      
                <div className="single_radio_container">
                  <input
                    type="radio"
                    name="isInNoticePeriod"
                  />
                  <label htmlFor="isInNoticePeriod">No</label>
                </div>
              </div>
            </div>
      
            <div className="double_input_container">
              <div className="single_input_container">
                <label htmlFor="noticePeriodEnd"
                  >If Yes, when will your notice period end?*</label>
                <input
                  type="date"
                  name="noticePeriodEnd"
                  id="noticePeriodEnd"
                />
              </div>
      
              <div className="single_input_container">
                <label htmlFor="noticePeriodLength"
                  >How long is your notice period?* (Mention in months)</label>
                <select
                  name="noticePeriodLength"
                  id="noticePeriodLength"
                >
                  <option value="0">0 months</option>
                  <option value="1">1 months</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                </select>
              </div>
            </div>
          </div>
      
          <div className="flex_16">
            <div className="radio_container">
              <span className="radio_container_label"
                >Have You Appeared For Any Test By Zeus in the past 12 months?*</span>
              <div className="radio_container_options">
                <div className="single_radio_container">
                  <input
                    type="radio"
                    name="isAppearedInTestByZeus"
                    id="isAppearedInTestByZeus_yes"
                  />
                  <label htmlFor="isAppearedInTestByZeus_yes">Yes</label>
                </div>
      
                <div className="single_radio_container">
                  <input
                    type="radio"
                    name="isAppearedInTestByZeus"
                    id="isAppearedInTestByZeus_no"
                  />
                  <label htmlFor="isAppearedInTestByZeus_no">No</label>
                </div>
              </div>
            </div>
      
            <div className="single_input_container specific_width">
              <label for="appearedRoleName"
                >If Yes, which role did you apply for?</label>
              <input
                type="text"
                name="appearedRoleName"
                id="appearedRoleName"
              />
            </div>
          </div>
        </div>
      
  : 
            <div className="step_inputs">
    <div className="technologies_container">
      <span className="technologies_container_label"
        >Select All The Technologies You Are Familiar In</span>

      <div className="single_checkbox_container">
        <input
          type="checkbox"
          id="f_technology"
        />
        <label htmlFor="f_technology">{}</label>
      </div>

      <div className="single_input_container specific_width">
        <label for="otherTechnologies">If others, please mention</label>
        <input
          type="text"
          name="otherTechnologies"
          id="otherTechnologies"
        />
      </div>
    </div>

    <div className="flex_16">
      <div className="radio_container">
        <span className="radio_container_label"
          >Have You Appeared For Any Test By Zeus in the past 12 months?*</span>
        <div className="radio_container_options">
          <div className="single_radio_container">
            <input
              type="radio"
              name="isAppearedInTestByZeus"
              id="isAppearedInTestByZeus_yes"
            />
            <label htmlFor="isAppearedInTestByZeus_yes">Yes</label>
          </div>

          <div className="single_radio_container">
            <input
              type="radio"
              name="isAppearedInTestByZeus"
              id="isAppearedInTestByZeus_no"
            />
            <label htmlFor="isAppearedInTestByZeus_no">No</label>
          </div>
        </div>
      </div>

      <div className="single_input_container specific_width">
        <label htmlFor="appearedRoleName"
          >If Yes, which role did you apply for?</label>
        <input
          type="text"
          name="appearedRoleName"
          id="appearedRoleName"
        />
      </div>
    </div>
  </div>

        }
 
</div>
<div class="step_moving_btn">
  <button
    class="next_previous_btn"
    type="submit"
  >
    PREVIOUS
  </button>
  <button class="next_previous_btn" type="submit">
    NEXT
  </button>
</div>
</div>
    )
}