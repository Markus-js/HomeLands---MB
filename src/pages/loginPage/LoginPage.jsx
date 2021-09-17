import React from "react";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { ClearFix } from "../../components/ClearFix/ClearFix";
export const Loginpage = () => {
  return (
    <>
      <LoginForm />
      <ClearFix height={"md"} />
    </>
  );
};
