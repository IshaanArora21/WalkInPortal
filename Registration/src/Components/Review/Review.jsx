import React, { useState } from "react"
import ReviewStyles from "./Review.module.scss"
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import EducationalQualifications from "../Qualifications/EducationalQualifications";
import ProfessionalQualifications from "../Qualifications/ProfessionalQualifications";
import { useNavigate } from "react-router-dom"
import useRegisterStore from "../../ReactStore/Store";
import useQualificationStore from "../../ReactStore/QualificationsStore";
import axios from 'axios';
export default function Review() {
  const navigate = useNavigate();
  const jobRoleMap = {
    "Instructional Designer": 1,
    "Software Engineer": 2,
    "Software Quality Engineer": 3,
  };


  const techMap = {
    'Javascript': 1,
    'Angular JS': 2,
    'Node JS': 3,
    'React': 4
  };


  const [isReviewPersonalInformation, setIsReviewPersonalInformation] = useState(true)
  const [isReviewQualifications, setIsReviewQualifications] = useState(true)
  function handlePrevious() {
    navigate("/register/qualification");
  }
  function handleEditPersonalInformation() {
    setIsReviewPersonalInformation(false)
  }
  function handleSavePersonalInformation() {
    setIsReviewPersonalInformation(true)
  }
  function handleEditQualifications() {
    setIsReviewQualifications(false)
  }
  function handleSaveQualifications() {
    setIsReviewQualifications(true)
  }
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    resumeFile,
    portfolioUrl,
    profilePicFile,
    countryCode,
    jobRoles,
  } = useRegisterStore();
  const jobRoleIds = jobRoles.map(role => jobRoleMap[role]);
  const {
    percentage,
    year,
    qualification,
    stream,
    college,
    otherCollege,
    location,
    isFresher,
    experienceYear,
    currentCtc,
    expectedCtc,
    noticePeriod,
    noticeEndDate,
    noticeDuration,
    appliedTest,
    appliedRole,
    expertiseTechnology,
    familiarTechnology,
  } = useQualificationStore();
  const experitseTechnologiesIds = expertiseTechnology
    .map((tech) => techMap[tech])
    .filter((id) => id !== undefined && id !== null);

  const familiarTechnologiesIds = familiarTechnology
    .map((tech) => techMap[tech])
    .filter((id) => id !== undefined && id !== null);

  const sendData = async () => {
    const newUser = {
      personalInfo: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        phone_no: countryCode+""+phoneNumber,
        resume: resumeFile?resumeFile:"",
        portfolio_url: portfolioUrl?portfolioUrl:"",
        profile_pic: profilePicFile?profilePicFile:"",
        preferred_Job_roles_id: jobRoleIds
      },
      educationalQualification: {
        aggregate_percentage: parseFloat(percentage),
        passing_year: parseInt(year),
        degree: qualification,
        stream: stream,
        college: college === "Others" ? otherCollege : college,
        college_city: location
      },
      professionalQualification: {
        applicant_type: isFresher?"fresher":"experienced",
        applied_test: appliedTest,
        applied_test_role: appliedRole || "",
        familiarTechnologies: familiarTechnologiesIds,
        experienced_qualification: {
          experience_year: isFresher? 0 : parseInt(experienceYear || "0"),
          current_ctc: isFresher? "0" :currentCtc || "0",
          expected_ctc: isFresher? "0":expectedCtc || "0",
          notice_period: noticePeriod || false,
          notice_period_end: noticeEndDate || null,
          notice_period_duration: parseInt(noticeDuration || "0"),
          expertiseTechnologies: isFresher? [] : experitseTechnologiesIds,
        }
      }
    };
    

    try {
      console.log("These are variables being sent:", newUser)
      const response = await axios.post(
        "http://localhost:5000/graphql",
        {
          query: `
          mutation CreateUser($newUser: userInput!) {
            createUser(newUser: $newUser)
          }
          `,
          variables: { newUser }
        },
        {
          headers: {
            "x-api-key": "dummy-api-key",
          },
        }
      )
      console.log(response.data);
    }
    catch (error) {
      console.error("Error in fetchData:", error.message);
    }
  }

  return <>

    <div>
      <div className={ReviewStyles.singleMainHeaderComponent}>
        <div className={ReviewStyles.mainComponentTitle}>Personal Information</div>
        <button
          className={ReviewStyles.mainEditComponent}
        >
          <img src="/assets/icons/edit.png" alt="edit icon" onClick={handleEditPersonalInformation} />
          <span onClick={handleEditPersonalInformation}>Edit</span>
          <img src="/assets/icons/correct.png" alt="correct icon" onClick={handleSavePersonalInformation} />
          <span onClick={handleSavePersonalInformation}>Save</span>

        </button>
      </div>
      <PersonalInformation review={isReviewPersonalInformation} />
      <div className={ReviewStyles.singleMainHeaderComponent}>
        <div className={ReviewStyles.mainComponentTitle}>Qualifications</div>
        <button
          className={ReviewStyles.mainEditComponent}
        >
          <img onClick={handleEditQualifications} src="/assets/icons/edit.png" alt="edit icon" />
          <span onClick={handleEditQualifications}>Edit</span>
          <img onClick={handleSaveQualifications} src="/assets/icons/correct.png" alt="correct icon" />
          <span onClick={handleSaveQualifications}>Save</span>

        </button>
      </div>
      <EducationalQualifications review={isReviewQualifications} />
      <ProfessionalQualifications review={isReviewQualifications} />
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
    <button onClick={sendData}>Register</button>
  </>
}