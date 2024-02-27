import React from "react";
import { Outlet } from "react-router-dom";
import CreateAccount from "./CreateAccount/CreateAccount";
import RegistrationProgress from "./RegistrationProgress/RegistrationProgress";

const Layout = () => {
  return (
    <>
      <CreateAccount/>
      <RegistrationProgress/>
      <Outlet />
    </>
  );
};

export default Layout;