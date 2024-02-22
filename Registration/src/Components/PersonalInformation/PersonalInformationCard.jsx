import React from "react"
import PersonalInformation from "./PersonalInformation"
import RegistrationProgress from "../RegistrationProgress/RegistrationProgress"
import CreateAccount from "../CreateAccount/CreateAccount"
export default function PersonalInformationCard(){
    return (
        <>
        <CreateAccount/>
        <RegistrationProgress/>
        <PersonalInformation/>
        </>
        
    )
}