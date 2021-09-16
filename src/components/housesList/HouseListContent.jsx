import React from 'react'
import { doFetch } from '../../helpers/Fetch';
import { Link } from "react-router-dom";
import Style from "./houseListContent.module.scss"



export const HouseListContent = ({ item, insulation_grade, url, pageIdentifier}) => {

    // BRUGES IKKE LÆNGERE efter refactoring nesting af mappe struktur
    // Ser efter hvilken Page der skal bruge Content, og tilføjer den tilhørende link path.
    let identifier = null;
    if(pageIdentifier === "FRONT_PAGE") {
        identifier = `/housingsearch/houses/${item.id}`
        //`${url}/${item.id}`
    }
    if(pageIdentifier === "LIST_PAGE") {
        identifier = `/housingsearch/houses/${item.id}`
    }

    const handlePatch = async (id) => {
        const url = `https://api.mediehuset.net/homelands/homes/${id}`;
        const res = await doFetch(url, "PATCH");
        console.log(res);
      };

    return (
        <Link onClick={() => {handlePatch(item.id)}} to={identifier}>
        <div className={Style.card_container__card} >
       
          <div className={Style.card_container__card__imgbox}>
            <img
              src={item.images[0].filename.medium}
              alt={item.images.description}
            />
          </div>
          <div className={Style.card_container__card__desc}>
            <h2>{item.address} </h2>
            <p>
              {item.zipcode} {item.city}
            </p>
            <p >{item.type} </p>
            <footer
              className={Style.card_container__card__desc__footer}
            >
              <p className={`${insulation_grade}`}>
                {item.energy_label_name}
              </p>
              <p>
                {item.num_rooms} værelser, {item.floor_space}&#x33A1;
              </p>
              <h3>{item.price} DKK</h3>
            </footer>
          </div>
          <div className={Style.outline}></div>
          </div>
         
    </Link>
    )
}
