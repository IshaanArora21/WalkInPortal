import React from "react"
import { Route, Routes } from "react-router-dom";
import Drives from "./WalkInDrive/Drives";
import WalkInReview from "./Review/WalkInReview";
import DriveDetails from "./WalkInDrive/DriveDetails";
const WalkInDrive = () => {
    return (
      <>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Drives />} />
          <Route path="/drive/:guid" element={<DriveDetails />} />
          <Route path="/review" element={<WalkInReview />} />
          {/* </Route> */}
        </Routes>
      </>
    );
  };
  export default WalkInDrive;