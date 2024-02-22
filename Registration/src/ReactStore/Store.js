import create from 'zustand'
export const useRegisterStore=create((set)=>({
    personalInformation:{
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        resumeFile: '',
        portfolioUrl: '',
        referral: '',
        jobMailUpdates: '',
        profilePicFile: '',
        jobRoles: ''

    },
    educationalQualifications:{
        percentage: '',
        year: '',
        qualification: '',
        stream: '',
        college: '',
        location: '',
    },
    professionalQualifications:{
        applicantType: '',
        experienceYear: '',
        currentCtc: '',
        expectedCtc: '',
        expertiseTechnology: [], 
        familiarTechnology: '',
        noticePeriod: '',
        noticeEndDate: '',
        noticeDuration: '',
        appliedTest: '',
        appliedRole: '',
    },
    setPersonalInformation:(personalInfo)=>
    set((state) => ({ personalInformation: { ...state.personalInformation, ...personalInfo } })),
    setEducationalQualifications:(educationInfo)=>
    set((state) => ({ educationalQualifications: { ...state.educationalQualifications, ...educationInfo } })),
    setProfessionalQualifictions:(professionalInfo)=>
    set((state) => ({ professionalQualifications: { ...state.professionalQualifications, ...professionalInfo } })),
}))