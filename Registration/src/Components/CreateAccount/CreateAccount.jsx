import React from 'react';
import CreateAccountStyles from "./CreateAccount.module.scss";
import useRegisterStore from '../../ReactStore/Store';
import useQualificationStore from '../../ReactStore/QualificationsStore';
import axios from "axios"
export default function CreateAccount() {
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
      
    return (
        <div className={CreateAccountStyles.createAccountBar}>
            <img src="/assets/icons/back.svg" alt="back arrow" />
            <div className={CreateAccountStyles.createAccountTitle}>Create An Account</div>
            <div className={CreateAccountStyles.buttons}>
                <button className={`${CreateAccountStyles.createAccountButton} ${CreateAccountStyles.createButton}`}>CANCEL</button>
                <button className={`${CreateAccountStyles.createAccountButton} ${CreateAccountStyles.cancelButton}`} onClick={sendData}>CREATE</button>
            </div>
        </div>
    );
}
