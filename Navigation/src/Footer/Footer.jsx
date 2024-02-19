import React from "react"
import FooterStyles from "./Footer.module.scss"
export default function Footer(){
    return (
       <div className={FooterStyles.footer}>
        <p className={FooterStyles.about}>About</p><p className={FooterStyles.divider}>|</p><p className={FooterStyles.contact}>Contact</p>
       </div>
    )
}