import React from 'react';
import CreateAccountStyles from "./CreateAccount.module.scss";

export default function CreateAccount() {
    return (
        <div className={CreateAccountStyles.createAccountBar}>
            <img src="/assets/icons/back.svg" alt="back arrow" />
            <div className={CreateAccountStyles.createAccountTitle}>Create An Account</div>
            <div className={CreateAccountStyles.buttons}>
                <button className={`${CreateAccountStyles.createAccountButton} ${CreateAccountStyles.createButton}`}>CANCEL</button>
                <button className={`${CreateAccountStyles.createAccountButton} ${CreateAccountStyles.cancelButton}`}>CREATE</button>
            </div>
        </div>
    );
}
