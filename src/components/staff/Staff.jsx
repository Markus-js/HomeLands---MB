import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doFetch } from "../../helpers/Fetch";
import Style from "./staff.module.scss";

export const Staff = () => {
  const [staff, setStaff] = useState({});

  useEffect(() => {
    const getStaff = async () => {
      let url = `https://api.mediehuset.net/homelands/staff`;
      let res = await doFetch(url);
      setStaff(res);
    };
    getStaff();
  }, []);

  console.log(staff);
  return staff.items ? (
    <section>
      <h2 className="title">Mød vores ansatte</h2>
      <div className={Style.card_container}>
        {staff.items.map((s) => {
          return (
           <Link to={`/staffPage/${s.id}`} key={s.id}>
            <div
             
              className={Style.card_container__card}
              style={{ backgroundImage: `url(${s.image})` }}
        
            >
                <div className={Style.card_container__card__desc}>
                    <h4>{s.firstname} {s.lastname}</h4>
                    <p>{s.position}</p>
                </div>
            </div>
           </Link>
          );
        })}
      </div>
    </section>
  ) : (
    <p>Siden indlæses...</p>
  );
};
