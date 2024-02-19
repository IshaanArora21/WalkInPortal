import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PersonalInformation from "./Components/PersonalInformation/PersonalInformation";
import EducationalQualifications from "./Components/Qualifications/EducationalQualifications";

const App = () => (
  <div>
<EducationalQualifications/>
  </div>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
