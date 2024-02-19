import React from "react"
import "./Progress.css"
export default function Progress() {
    return <div class="reg-progress-bar">
        <div class="progress-div">
            <div class="">
                <div class="progress-numbers">1</div>
            </div>
            <div class="progress-labels">Personal Information</div>
        </div>
        <div class="progress-line"></div>
        <div class="progress-div">
            <div class="progress-numbers-circle complete">
                <div class="progress-numbers">2</div>
            </div>
            <div class="progress-labels">Qualifications</div>
        </div>
        <div class="progress-line"></div>
        <div class="progress-div">
            <div class="">
                <div class="progress-numbers">3</div>
            </div>
            <div class="progress-labels">Review and Proceed</div>
        </div>
    </div>
}