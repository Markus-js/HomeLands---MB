
import React from 'react'
import { Reviews } from '../../components/reviews/Reviews';
import { Staff } from '../../components/staff/Staff';
import {Slider} from "../../components/slider/Slider";
import Style from "./frontpage.module.scss"
import HouseListFrontpage from '../../components/housesList/HouseListFrontpage';

export const Frontpage = () => {
    return (
        <>
        <Slider />
        <HouseListFrontpage />
        <Reviews />
        <Staff />
      </>
    )
}
