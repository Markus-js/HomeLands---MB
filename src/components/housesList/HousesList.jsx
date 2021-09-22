import React, { useState, useEffect } from "react";
import { doFetch } from "../../Helpers/Fetch";
import Style from "./houseListContent.module.scss";

import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { SelectHousingType } from "../SelectHousingType/SelectHousingType";
import { useRouteMatch } from "react-router-dom";
import { HouseListContent } from "./HouseListContent";
import { ClearFix } from "../ClearFix/ClearFix"

export const HousesList = () => {
  const [housesData, setHousesData] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 5500000]);
  const [housingType, setHousingType] = useState("");




  // Bliver sendt med som prop => HouseListContent,
  // hvor der bliver målt på om linkes fra Front-page || House-list
  const pageIdentifier = "LIST_PAGE";
  let { url } = useRouteMatch();






  const gethousesData = async () => {
    const url = "https://api.mediehuset.net/homelands/homes";
    const res = await doFetch(url);
    setHousesData(res);
  };





  useEffect(() => {
    gethousesData();
  }, []);





  return (
    <>
    <section>
      <header className={Style.header}>
        <h2>Boliger til salg</h2>
        <p>
          {priceRange[0] > 10 || priceRange[1] < 5500000
            ? `${priceRange[0]} - ${priceRange[1]}`
            : "Sorter efter prisniveau"}
        </p>
        <div className={Style.range}>
          <PriceRangeSlider setPriceRange={setPriceRange} />
        </div>
        <div className={Style.select}>
          <SelectHousingType setHousingType={setHousingType} />
        </div>
      </header>

      <div className={Style.card_container}>
        {housesData.items &&
          housesData.items.map((item) => {



            let insulation_grade = item.energy_label_name;
            let price = parseInt(item.price).toFixed();
            if (price > priceRange[0] && price < priceRange[1]) {
              if (item.type.toLowerCase().includes("")) {
                if (!item.type.toLowerCase().includes(housingType)) {
                  return null;
                }



                

                return (
                  <HouseListContent
                    key={item.id}
                    item={item}
                    insulation_grade={insulation_grade}
                    url={url}
                    pageIdentifier={pageIdentifier}
                  />
                  //       <Link onClick={() => {handlePatch(item.id)}} key={item.id} to={`${url}/${item.id}`}>
                  //     <div className={Style.card_container__card} >

                  //       <div className={Style.card_container__card__imgbox}>
                  //         <img
                  //           src={item.images[0].filename.medium}
                  //           alt={item.images.description}
                  //         />
                  //       </div>
                  //       <div className={Style.card_container__card__desc}>
                  //         <h2>{item.address} </h2>
                  //         <p>
                  //           {item.zipcode} {item.city}
                  //         </p>
                  //         <p>{item.type} </p>
                  //         <footer
                  //           className={Style.card_container__card__desc__footer}
                  //         >
                  //           <p className={`${insulation_grade}`}>
                  //             {item.energy_label_name}
                  //           </p>
                  //           <p>
                  //             {item.num_rooms} værelser, {item.floor_space}&#x33A1;
                  //           </p>
                  //           <h3>{item.price} DKK</h3>
                  //         </footer>
                  //       </div>
                  //       <div className={Style.outline}></div>
                  //       </div>

                  // </Link>
                );
              }
            } else {
              return null;
            }
          })}
      </div>
     
    </section>
     <ClearFix height="md" />
    </>
  );
};
