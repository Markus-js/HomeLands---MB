import React from "react";
import { Reviews } from "../../components/reviews/Reviews";
import { StaffList } from "../../components/staff/StaffList";
import { Slider } from "../../components/slider/Slider";
import HouseListFrontpage from "../../components/housesList/HouseListFrontpage";
import { Helmet } from "react-helmet";

export const Frontpage = () => {
  return ( 
    <>
      <Helmet>
        <title>HomeLands boligside</title>
        <meta name="Forside" content="HomeLands | Bolig udvalg for alle smage |  Hjælp til at sælge og finde din drømme bolig" />
      </Helmet>
      <Slider />
      <HouseListFrontpage />
      <Reviews />
      <StaffList />
    </>
  );
};
