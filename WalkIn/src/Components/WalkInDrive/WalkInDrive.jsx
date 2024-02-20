import React,{useState} from "react"
import WalkInDriveStyles from "./WalkInDrive.module.scss"
export default function WalkInDrive(){

    const [stylesPreReq,setStylesPreReq]=useState({})
    const [stylesJob,setStylesJob]=useState({})
    const [isOpenPreReq,setIsOpenPreReq]=useState(true)
    const [isOpenJob,setIsOpenJob]=useState(true)
    const style1={
      display:"none"
    }
    const style2={

    }
    function handleClickPreReq(){
      if(isOpenPreReq)setStylesPreReq(style1)
      else setStylesPreReq(style2)
      setIsOpenPreReq(!isOpenPreReq)
    }
    function handleClickJob(){
      if(isOpenJob)setStylesJob(style1)
      else setStylesJob(style2)
      setIsOpenJob(!isOpenJob)
    }
    return (
<div className="main_conatainer">
  <div className="go_up_component">
    <img src="/assets/icons/arrow_upward_black_24dp.svg" alt="" />
  </div>

  <div className="list_container">
    <div className="job_container">
      <h1>{}</h1>

      <div className="apply_in_job">
        <button
          className="apply_btn"
        >
          APPLY
        </button>
      </div>

      <div className="date_time_container">
        <span>Date & Time :</span>

        <div className="date_time_value">
          <div className="">{}</div>
          <div className="splitter"></div>
          <div className="location">
            <img
              src="/assets/icons/location_on_grey_24dp.svg"
              alt="location icon"
            />
            <span>{}</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="job_role_title">Job Roles :</div>
      <div className="job_role_container">
     
        <div className="single_job">
          <img
            src="/assets/icons/Instructional Designer.svg"
            alt="Instructional Designer icon"
          />
          <span className="">{}</span>
        </div>
       
        <div className="job_splitter screen_mobile"></div>
        
      </div>

     
      <div className="extra_roles_container">
        <span className="extra_roles">{}</span>
      </div>
      
    </div>

    <div className="dropDown" onClick={handleClickPreReq}>
      <span>Pre-requisites & Application Process</span>
      <div>
 
        <img
          src={isOpenPreReq?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
          alt="expand less/more icon"
        
        />
      </div>
    </div>

    <div
      className="single_job_container" style={stylesPreReq}
    >
      <div className="job_container_info">
        <div className="job_info">
          <div className="job_header">General Instructions :</div>

          <div className="job_value">
          

            <div className="">- {}</div>

      
          </div>
        </div>

        <hr />

        <div className="job_info" style={stylesPreReq}>
          <div className="job_header">Instructions for the Exam :</div>

          <div className="job_value">
          

            <div className="">- {}</div>

            
          </div>
        </div>

        <hr />

        <div className="job_info" style={stylesPreReq}>
          <div className="job_header">Minimum System Requirements :</div>

          <div className="job_value">
           
            <div className="">- {}</div>

            
          </div>
        </div>

        <hr />

        <div className="job_info" style={stylesPreReq}>
          <div className="job_header">Process :</div>

          <div className="job_value">
           
           

            <div className="">- {}</div>

            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="time_slot_container">
    <h1>Time Slots & Preferences</h1>

    <div className="radio_container">
      <span className="radio_container_label">Select a Time Slot :</span>

      <div className="radio_container_options">
      

        <div className="single_radio_container">
          <input
            type="radio"
            name="isInNoticePeriod"
           
           
          />
          <label for="isInNoticePeriod">{}</label>
        </div>
        
      </div>
    </div>

    <hr />

    <div className="technologies_container">
      <span className="technologies_container_label">Select Your Preference :</span>
     

      <div className="single_checkbox_container">
        <input
          type="checkbox"
   
       
        
        />
        <label htmlFor="checkbox_job_role">
          {}
        </label>
      </div>
      
    </div>
    <hr />

    <div className="upload_resume_container">
      <label className="input_file_label" for="input_file">
        <img
          src="/assets/icons/Upload_green_24dp.svg"
          alt="Upload Resume icon"
        />
        Upload Resume
      </label>
      <input type="file" accept=".pdf" id="input_file" />
    </div>
  </div>

 

  <div className="single_job_container">
    <div className="dropDown" onClick={handleClickJob}>
      <span>{`Job Name`}</span>

      <div>
     
        <img
          src={isOpenJob?"/assets/icons/expand_less_black_24dp.svg":"/assets/icons/arrow-down.svg"}
          alt="expand less/more icon"
        />
      </div>
    </div>

    <div className="job_container_info" style={stylesJob}>
      <div className="job_info">
        <div className="job_header">gross compensation package :</div>

        <div className="job_value">
          Rs. {} lpa
        </div>
      </div>

      <hr />

      <div className="job_info" style={stylesJob}>
        <div className="job_header">Role Description :</div>

        <div className="job_value">

         

          <div className="">- {}</div>

          
        </div>
      </div>

      <hr />

      <div className="job_info" style={stylesJob}>
        <div className="job_header">Requirements :</div>

        <div className="job_value">
        
         
         

          <div className="">- {}</div>

          
        </div>
      </div>
    </div>
  </div>
  
</div>
)
}