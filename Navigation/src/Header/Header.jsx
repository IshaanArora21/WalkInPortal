import React from "react"
import HeaderStyles from "./Header.module.scss"
export default function Header(){
    return(
        <div className={HeaderStyles.Header}>
 <img
    className={HeaderStyles.headerLogo}
    src="/assets/Zeus-LMS-logo.svg"
    alt="quantum dashboard logo"
  />

 
  <div className={HeaderStyles.userLogin}>U</div>
  
        </div>
       
    )
}