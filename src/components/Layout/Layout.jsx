import React from "react";
import { Footer } from "./Footer/Footer";
import { Navigation } from "./Navigation/Navigation";
// Layout Parent component
export const Layout = (props) => {
  return (
    <div className={props.class}>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};
