import React from "react"
import "./Review.css"
export default function Review(){
  const uploaded=false;
  return <div>
    <div className="single_main_header_component">
      <div className="main_component_title">Personal Information</div>
      <button
        className="main_edit_component"
      >
        <img src="/assets/icons/edit.png" alt="edit icon" />
        <span >Edit</span>
        <img src="/assets/icons/correct.png" alt="correct icon" />
        <span>Save</span>

      </button>
    </div>

    <div className="single_main_component mb_24">
      <div className="user_image_container">
        {/* <img src="userInfo.avatarBase64" alt="userInfo.avatarName" /> */}
        <img src="/assets/icons/account_circle.svg" alt="user image" />
        <div className="user_picture_component">
          <input
            id="input_user_image"
            type="file"
            accept="image/*"
          />

          <label for="input_user_image" className="user_picture_component">
{/* 
            <img
              className="display_image"
              src="userInfo.avatarBase64"
              alt="userInfo.avatarName"
            /> */}


            {/* <img
              className="display_image"
              src="/assets/icons/account_circle.svg"
              alt="user image icon"
            /> */}



            
           
           {/* <div className="user_picture_title">CHANGE { }</div>
            <div className="user_picture_info">Max. image size: 5 MB</div>


           <div className="user_picture_title">UPLOAD DISPLAY PICTURE</div>
            <div className="user_picture_info">Max. image size: 5 MB</div> */}
            

          </label>
        </div>

      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >First Name</span>
        <input
          type="text"
          className="single_container_value"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Last Name</span>
        <input
          type="text"
          className="single_container_value"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience">Email</span>
        <input
          type="text"
          className="single_container_value"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Phone Number</span>
        <div className="phone_number_container">
          <div className="add_text">+</div>
          <input
            className="country_code"
            type="number"
            id="countryCode"
          />
          <input
            className="phone_number"
            type="number"
            id="phoneNumber"
          />
        </div>
      </div>

      <div className="single_input_container">
        <span className="resume_info_container">
          <img
            src="/assets/icons/Upload_black_24dp.svg"
            alt="Upload Resume icon"
          />
          <span> Upload Resume </span>
          <span>{ }</span>
          <div className="upload_resume_container">
            <label className="input_file_label" for="input_file">
              <img
                src="/assets/icons/Upload_black_24dp.svg"
                alt="Upload Resume icon"
              />
              <span> Upload Resume </span>
              <span>{ }</span>
            </label>
            <input
              type="file"
              accept=".pdf"
              id="input_file"
            />
          </div>

        </span>
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Enter Portfolio URL (if any)</span>
        <input
          type="text"
          className="single_container_value"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Preferred Job Roles</span>
        <span className="checkbox_ticked_value_container">

          <span>{ }</span>

        </span>
        <div className="checkbox_single_container">
          <input
            id="preferredJobRoles.JobRoleNames[$index]"
            type="checkbox"
          />
          <label
            htmlFor="preferredJobRoles.JobRoleNames[$index]"
            className="normal_label"
          >{ }</label>
        </div>
      </div>

      <div className="single_input_container">
        <span className="single_container_title referral_title" for="yearsOfExperience"
        >If You Are Registering Via A Referral, Please Mention Full Name Of The
          Employee Who Referred You</span>
        <span className="single_container_value">
          { }
          {` -`}
        </span>
        <input
          type="text"
          className="single_container_value"
        />

      </div>

      <div className="single_input_container">
        <div className="single_checkbox_container">
          <input
            type="checkbox"
            className=""
          />
          <span className="single_container_title" for="yearsOfExperience"
          >Send me job related updates via mail</span>
        </div>
      </div>
    </div>

    <div className="single_main_header_component">
      <div className="main_component_title">Qualifications</div>
      <button
        className="main_edit_component"
      >
        <img src="/assets/icons/edit.png" alt="edit icon" />
        <span>Edit</span>
        <img src="/assets/icons/correct.png" alt="correct icon" />
        <span>Save</span>

      </button>
    </div>

    <div className="dropDown">
      <span>Educational Qualifications</span>
    </div>

    <div className="single_main_component mb_24">
      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Aggregate Percentage</span>
        <input
          type="number"
          className="w_small"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Year of Passing</span>
        <input
          type="text"
          className="w_small"
        />
        <select
          className="w_small"
          name="passingYear"
          id="passingYear"
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>

      </div>

      <div className="double_container">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Qualification</span>
          <span className="single_input_container">
            { }
          </span>

          <select
            id="qualification"
          >
            <option value="Bachelor in Technology (B.Tech)">
              Bachelor in Technology (B.Tech)
            </option>
          </select>

        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience">Stream</span>
          <span className="single_input_container">
            { }
          </span>
          <select
            name="stream"
            id="stream"
          >
            <option value="Information Technology">Information Technology</option>
          </select>

        </div>
      </div>

      <div className="double_container">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >College</span>
          <span className="single_input_container">
            { }
          </span>
          <select
            name="collegeName"
            id="collegeName"
          >
            <option value="Pune Institute of Technology (PIT)">
              Pune Institute of Technology (PIT)
            </option>
          </select>
        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If others, please enter your college name</span>
          <span className="single_input_container">
            { }
            {`-`}
          </span>
          <input
            className="pb_4"
            type="text"
            name="otherCollageName"
            id="otherCollageName"
          />

        </div>
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Where is your college located?</span>
        <input
          className="w_small"
          type="text"
          name="collageLocation"
          id="collageLocation"
        />
      </div>
    </div>

    <div className="dropDown">
      <span>Professional Qualifications</span>
    </div>

    <div className="single_main_component mb_8">
      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Applicant Type</span>
        <span className="single_container_value">
          {`Experienced`}
          {` Fresher`}
        </span>
      </div>
    </div>


    <div className="single_main_component">
      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Years of Experience</span>
        <input
          type="number"
          className="w_small"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Current CTC (In Rupees)</span>
        <input
          type="number"
          className="w_small"
        />
      </div>

      <div className="single_input_container">
        <span className="single_container_title" for="yearsOfExperience"
        >Expected CTC (In Rupees)</span>
        <input
          type="number"
          className="w_small"

        />
      </div>

      <div className="flex_16">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Select All The Technologies You Expertise In</span
          >
          <span className="checkbox_ticked_value_container">

            <span>{ }</span>

          </span>
          <div className="single_checkbox_container">
            <input
              type="checkbox"
              id="e_technology"
            />
            <label htmlFor="'e_' + technology">{ }</label>
          </div>
        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If others, please mention</span>
          <span className="single_container_value">
            {`-`}
          </span>
          <input
            type="text"
            className="single_container_value"
          />
        </div>
      </div>

      <div className="flex_16">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Select All The Technologies You are familiar In</span
          >
          <span className="checkbox_ticked_value_container">

            <span>{ }</span>

          </span>

          <div className="single_checkbox_container">
            <input
              type="checkbox"
              id="f_technology"
            />
            <label htmlFor="f_technology">{ }</label>
          </div>
        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If others, please mention</span>
          <span className="single_container_value">
            { }
            {`-`}
          </span>
          <input
            type="text"
            className="single_container_value"
          />

        </div>
      </div>

      <div className="flex_16">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Are you currently on notice period?</span>
          <span className="single_container_value">
            {`Yes`}{`No`}
          </span>
          <div className="radio_container">
            <div className="radio_container_options">
              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isInNoticePeriod"
                />
                <label for="isInNoticePeriod">Yes</label>
              </div>

              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isInNoticePeriod"
                />
                <label for="isInNoticePeriod">No</label>
              </div>
            </div>
          </div>

        </div>

        <div className="double_container">
          <div className="single_input_container">
            <span className="single_container_title" for="yearsOfExperience"
            >If Yes, when will your notice period end?</span>

            <span className="single_container_value">
              { }
            </span>


            <input
              type="date"
              id="noticePeriodEnd"
            />


          </div>

          <div className="single_input_container">
            <span className="single_container_title" for="yearsOfExperience"
            >How long is your notice period? (Mention in months)</span>
            <span className="single_container_value">
              { } Months
            </span>
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
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Have You Appeared For Any Test By Zeus in the past 12 months?</span
          >
          <span className="single_container_value">
            {`Yes`} {`No`}
          </span>
          <div className="radio_container">
            <div className="radio_container_options">
              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isAppearedInTestByZeus"
                  id="isAppearedInTestByZeus_yes"
                />
                <label for="isAppearedInTestByZeus_yes">Yes</label>
              </div>

              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isAppearedInTestByZeus"
                  id="isAppearedInTestByZeus_no"
                />
                <label for="isAppearedInTestByZeus_no">No</label>
              </div>
            </div>
          </div>

        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If Yes, which role did you apply for?</span>
          <span className="single_container_value">
            {`-`}
          </span>
          <input
            exp_appearedRoleName
            className="single_container_value"
            type="text"
            name="appearedRoleName"
            id="appearedRoleName"
          />

        </div>
      </div>
    </div>


    <div className="single_main_component">
      <div className="flex_16">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Select All The Technologies You are familiar In</span>
          <span className="checkbox_ticked_value_container">
            <span>{ }</span>

          </span>

          <div className="single_checkbox_container">
            <input
              type="checkbox"
            />
            <label htmlFor="technology">{ }</label>
          </div>

        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If others, please mention</span>
          <span className="single_container_value">
          </span>
          <input
            type="text"
            className="single_container_value"
          />

        </div>
      </div>

      <div className="flex_16">
        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >Have You Appeared For Any Test By Zeus in the past 12 months?</span>
          <span className="single_container_value">
            {`Yes`}{`No`}
          </span>

          <div className="radio_container">
            <div className="radio_container_options">
              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isAppearedInTestByZeus"
                  id="isAppearedInTestByZeus_yes"
                />
                <label for="isAppearedInTestByZeus_yes">Yes</label>
              </div>

              <div className="single_radio_container">
                <input
                  type="radio"
                  name="isAppearedInTestByZeus"
                  id="isAppearedInTestByZeus_no"
                />
                <label for="isAppearedInTestByZeus_no">No</label>
              </div>
            </div>
          </div>

        </div>

        <div className="single_input_container">
          <span className="single_container_title" for="yearsOfExperience"
          >If Yes, which role did you apply for?</span>
          <span className="single_container_value">
            { }
          </span>
          <input
            type="text"
            className="single_container_value"
          />

        </div>
      </div>
    </div>



    <div className="step_moving_btn">
      <button
        className="next_previous_btn"
        type="submit"
      >
        PREVIOUS
      </button>
    </div>
  </div>
}