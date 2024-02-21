import React,{useState} from "react"
import JobDetailsStyles from "./JobDetails.module.scss"
export default function JobDetails() {
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
        <div className={JobDetailsStyles.mainComponent}>
        <div className={JobDetailsStyles.singleJobContainer}>
            <div className={JobDetailsStyles.dropDown} onClick={handleView}>
                <span>{`Job Name`}</span>

                <div>

                    <img
                        src={openContainer?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
                        alt="expand less/more icon"
                    />
                </div>
            </div>

            <div className={JobDetailsStyles.jobContainerInfo} style={containerStyles}>
                <div className={JobDetailsStyles.jobInfo}>
                    <div className={JobDetailsStyles.jobHeader}>gross compensation package :</div>

                    <div className={JobDetailsStyles.jobValue}>
                        Rs. { } lpa
                    </div>
                </div>

                <hr />

                <div className={JobDetailsStyles.jobInfo}>
                    <div className={JobDetailsStyles.jobHeader}>Role Description :</div>

                    <div className={JobDetailsStyles.jobValue}>



                        <div className="">- { }</div>


                    </div>
                </div>

                <hr />

                <div className={JobDetailsStyles.jobInfo}>
                    <div className={JobDetailsStyles.jobHeader}>Requirements :</div>

                    <div className={JobDetailsStyles.jobValue}>




                        <div className="">- { }</div>


                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}