import React, { useContext, useEffect } from "react";
import { Reviews } from "../../components/reviews/Reviews";
import { StaffList } from "../../components/staff/StaffList";
import { Slider } from "../../components/slider/Slider";
import Style from "./frontpage.module.scss";
import HouseListFrontpage from "../../components/housesList/HouseListFrontpage";
import { Helmet } from "react-helmet";

export const Frontpage = () => {
  return (
    <>
      <Helmet>
        <title>Forside</title>
        <meta name="Forside" content="HomeLands - find din næste bolig" />
      </Helmet>
      <Slider />
      <HouseListFrontpage />
      <Reviews />
      <StaffList />
    </>
  );
};
