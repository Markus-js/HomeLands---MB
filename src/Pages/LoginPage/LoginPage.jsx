import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ClearFix } from "../../components/ClearFix/ClearFix";
import { Helmet } from "react-helmet";

export const Loginpage = () => {
  return (
    <>
     <Helmet>
        <title>Login</title>
        <meta name="Login" content="HomeLands | Bolig udvalg for alle smage |  Hjælp til at sælge og finde din drømme bolig" />
      </Helmet>
      <LoginForm />
      <ClearFix height={"md"} />
    </>
  );
};
