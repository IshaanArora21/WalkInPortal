import React, { useState } from "react"
import PrerequistesStyles from "./Prerequistes.module.scss"
export default function Prerequistes() {
    const [openContainer,setOpenContainer]=useState(true);
    const [containerStyles,setContainerStyles]=useState({});
    const notVisible={
       display:'none'
    }
    function handleView(){
        if(openContainer){
            setContainerStyles(notVisible)
        }
        else{
            setContainerStyles({})
        }
        setOpenContainer(!openContainer)
    }
    return (
        <div className={PrerequistesStyles.mainComponent}>
            <div className={PrerequistesStyles.dropDown} onClick={handleView}>
                <span>Pre-requisites & Application Process</span>
                <div>

                    <img
                        src={openContainer?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
                        alt="expand less/more icon"

                    />
                </div>
            </div>

            <div
                className={PrerequistesStyles.singleJobContainer} style={containerStyles}
            >
                <div className={PrerequistesStyles.jobContainerInfo}>
                    <div className={PrerequistesStyles.jobInfo}>
                        <div className={PrerequistesStyles.jobHeader}>General Instructions :</div>

                        <div className={PrerequistesStyles.jobValue}>


                            <div className="">- { }</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequistesStyles.jobInfo}>
                        <div className={PrerequistesStyles.jobHeader}>Instructions for the Exam :</div>

                        <div className={PrerequistesStyles.jobValue}>


                            <div className="">- { }</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequistesStyles.jobInfo}>
                        <div className={PrerequistesStyles.jobHeader}>Minimum System Requirements :</div>

                        <div className={PrerequistesStyles.jobValue}>

                            <div className="">- {`Hello`}</div>


                        </div>
                    </div>

                    <hr />

                    <div className={PrerequistesStyles.jobInfo}>
                        <div className={PrerequistesStyles.jobHeader}>Process :</div>

                        <div className={PrerequistesStyles.jobValue}>



                            <div className="">- { }</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}