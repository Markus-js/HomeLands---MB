
import React from 'react'
import { Reviews } from '../../components/reviews/Reviews';
import { Staff } from '../../components/staff/Staff';
import News from '../../components/news/News';
import {Slider} from "../../components/slider/Slider";
import Style from "./frontpage.module.scss"

export const Frontpage = () => {
    return (
        <>
        <Slider />
        <News />
        <Reviews />
        <Staff />
      </>
    )
}
