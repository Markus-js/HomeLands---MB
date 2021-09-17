import React, { useState, useEffect } from "react";
import Style from "./houseListContent.module.scss";
import { doFetch } from "../../Helpers/Fetch";
import { HouseListContent } from "./HouseListContent";

export default function HouseListFrontpage() {
  const [housesData, setHousesData] = useState([]);



  // Bliver sendt med som prop => HouseListContent, 
  // hvor der bliver målt på om linkes fra Front-page || House-list
  const pageIdentifier = "FRONT_PAGE";




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
      <div className={Style.card_container}>
        {housesData.items &&
          housesData.items.map((item, i) => {
            let insulation_grade = item.energy_label_name;



            if (i < 3) {


              
              return (
                <HouseListContent
                  key={item.id}
                  item={item}
                  insulation_grade={insulation_grade}
                  pageIdentifier={pageIdentifier}
                />
                // <Link key={item.id} to={`/housingsearch/houses/${item.id}`}>
                //   <div className={Style.card_container__card}>
                //     <div className={Style.card_container__card__imgbox}>
                //       <img
                //         src={item.images[0].filename.medium}
                //         alt={item.images.description}
                //       />
                //     </div>
                //     <div className={Style.card_container__card__desc}>
                //       <h2>{item.address} </h2>
                //       <p>
                //         {item.zipcode} {item.city}
                //       </p>
                //       <p>{item.type} </p>
                //       <footer
                //         className={Style.card_container__card__desc__footer}
                //       >
                //         <p className={`${insulation_grade}`}>
                //           {item.energy_label_name}
                //         </p>
                //         <p>
                //           {item.num_rooms} værelser, {item.floor_space}&#x33A1;
                //         </p>
                //         <h3>{item.price} DKK</h3>
                //       </footer>
                //     </div>
                //     <div className={Style.outline}></div>
                //   </div>
                // </Link>
              );
            } else {
              return null;
            }
          })}
      </div>
     
    </section>
  );
}
