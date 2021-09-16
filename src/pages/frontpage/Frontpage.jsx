
import React, {useContext, useEffect} from 'react'
import { Reviews } from '../../components/reviews/Reviews';
import { StaffList } from '../../components/staff/StaffList';
import {Slider} from "../../components/slider/Slider";
import Style from "./frontpage.module.scss"
import HouseListFrontpage from '../../components/housesList/HouseListFrontpage';


export const Frontpage = () => {


    return (
        <>
        <Slider />
        <HouseListFrontpage />
        <Reviews />
        <StaffList />
      </>
    )
}
