import React, { useState, useEffect } from "react";
import { doFetch } from "../../Helpers/Fetch";
import Style from "./staff.module.scss";
import { StaffCard } from "./StaffCard";

export const StaffList = () => {
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
        {staff.items.map((data) => {
          return (
           <StaffCard data={data} />
          );
        })}
      </div>
    </section>
  ) : (
    <p>Siden indlæses...</p>
  );
};
