import React from "react"
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Qualifications from "../Components/Qualifications/Qualifications.jsx"
import Review from "../Components/Review/Review.jsx"
import PersonalInformationCard from "../Components/PersonalInformation/PersonalInformationCard.jsx";
import Layout from "./Layout.jsx"
const Registration = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<PersonalInformationCard />} />
          <Route path="/qualification" element={<Qualifications />} />
          <Route path="/review" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
};

export default Registration;