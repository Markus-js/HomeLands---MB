import React, { useState, useEffect } from "react";
import Style from "../../theme/cards.module.scss";
import { doFetch } from "../../helpers/Fetch";

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const url = "https://api.mediehuset.net/homelands/homes";
    const res = await doFetch(url);
    setNews(res);
  };
  useEffect(() => {
    getNews();
  }, []);


  return (
    <section>
      <div className={Style.card_container}>
        {news.items &&
          news.items.map((item, i) => {
          let test = item.energy_label_name;
            if (i < 3) {
              return (
                <div className={Style.card_container__card} key={item.id}>
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
                      <p className={`${test}`} >{item.energy_label_name}</p>
                      <p>
                        {item.num_rooms} værelser, {item.floor_space}&#x33A1;
                      </p>
                      <h3>{item.price} DKK</h3>
                    </footer>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </section>
  );
}
