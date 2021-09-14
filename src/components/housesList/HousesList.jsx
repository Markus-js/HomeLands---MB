import React, { useState, useEffect } from "react";
import { doFetch } from "../../helpers/Fetch";
import Style from "../../theme/cards.module.scss";

import PriceRangeSlider from "../../components/priceRangeSlider/PriceRangeSlider";
import { Search } from "../../helpers/Search";
import { SelectHousingType } from "../../components/selectHousingType/SelectHousingType";
import { Link, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router";

export const HousesList = () => {
  const [housesData, setHousesData] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5500000]);
  const [housingType, setHousingType] = useState("");


  let { url } = useRouteMatch()


  const gethousesData = async () => {
    const url = "https://api.mediehuset.net/homelands/homes";
    const res = await doFetch(url);
    setHousesData(res);
  };
  useEffect(() => {
    gethousesData();
  }, []);
  
  return (
    <section>
      <p>
        {priceRange[0]} /- and {priceRange[1]}
      </p>
      <Search />
      <PriceRangeSlider setPriceRange={setPriceRange} />
      <SelectHousingType setHousingType={setHousingType} />
      
      <div className={Style.card_container}>
        {housesData.items &&
          housesData.items.map((item, i) => {
            let insulation_grade = item.energy_label_name;
            let price = parseInt(item.price).toFixed();
            if (price > priceRange[0] && price < priceRange[1]) {
                if (item.type.toLowerCase().includes("")) {
                    if (!item.type.toLowerCase().includes(housingType)) {
                      return null;
                    }
                 
                return ( 
                    <Link key={item.id} to={`${url}/${item.id}`}>
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
                      <p>{item.type} </p>
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
                  </div>
              </Link>
                );
              }
            } else {
              return null;
            }
          })}
      </div>
    </section>
  );
};
