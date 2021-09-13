import React, { useState, useEffect } from "react";
import { doFetch } from "../../helpers/Fetch";
import Style from "./reviews.module.scss";

export const Reviews = () => {
  const [review, setReview] = useState([]);
  const [count, setCount] = useState(review.length);

  if (count === review.length - 1) setCount(0);

  const getReview = async () => {
    const url = "https://api.mediehuset.net/homelands/reviews";
    const res = await doFetch(url);
    setReview(res.items);
  };

  useEffect(() => {
    getReview();

    
    let interval = setInterval(() => {
      if (count >= review.length || !count === 2) {
        setCount((x) => x + 1);
      }
    }, 4000);
    
    return () => {
      clearInterval(interval);
    };
    
  }, []);

  const convertTime = (stamp) => {
    let string = new Date(stamp * 1000).toLocaleDateString("da-DK");
    return string;
  };

  return review.length > 2 && count >= 0 ? (
    <section className={Style.review_section}>
      <h2 className="title  ">Det siger kunderne:</h2>
      <article>
        <header>
          <h3>{review[count].title}</h3>
        </header>
        <main>
          <p>{review[count].content}</p>
        </main>
        <footer>
          <p>
            {review[count].user.firstname} {review[count].lastname},
            {convertTime(review[count].created)}
          </p>
        </footer>
      </article>
    </section>
  ) : <p>Siden indlæses...</p>;
};
