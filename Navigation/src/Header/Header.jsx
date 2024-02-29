import React from "react"
import HeaderStyles from "./Header.module.scss"
import { useNavigationStore } from "../ReactStore/Store";
export default function Header() {
    const { isUserLoggedIn, userDetails } = useNavigationStore();
    console.log(isUserLoggedIn);
    return (
        <div className={HeaderStyles.Header}>
            <img
                className={HeaderStyles.headerLogo}
                src="/assets/Zeus-LMS-logo.svg"
                alt="quantum dashboard logo"
            />

            {isUserLoggedIn && (
                <div className={HeaderStyles.userLogin}>
                    {userDetails.first_name?.charAt(0).toUpperCase()}
                </div>
            )}

        </div>

    )
}