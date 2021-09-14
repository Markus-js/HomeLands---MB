import React, { useState, useEffect } from "react";
import { doFetch } from "../../helpers/Fetch";
import { useParams } from "react-router-dom";
import Style from "./houseDetails.module.scss";
import photo_icon from "../../assets/images/photo-icon.svg";
import floorplan_icon from "../../assets/images/floorplan-icon.svg";
import location_icon from "../../assets/images/location-icon.svg";
import heart_icon from "../../assets/images/heart-icon.svg";

import { Modal } from "../modal/Modal";

export const HouseDetails = () => {
  const [houseData, setHouseData] = useState({});
  const [modalToggle, setModalToggle] = useState(true);
  const [modalType, setModalType] = useState("");
  
  let { houseId } = useParams();

  const getHouseData = async () => {
    const url = `https://api.mediehuset.net/homelands/homes/${houseId}`;
    const res = await doFetch(url);
    setHouseData(res);
  };
  useEffect(() => {
    getHouseData();
  }, []);
  console.log(houseData);

  const handleModal = (type) => {
      setModalType(type)
      setModalToggle(true)
  }

  return houseData.item ? (
    <section className={Style.parent_body}>
      <header className={Style.parent_body__header}>
        <img
          className={Style.parent_body__header__img}
          src={houseData.item.images[0].filename.large}
          alt={houseData.item.images[0].description}
        />
      </header>
      <main className={Style.details_container}>
        <header className={Style.details_container__header}>
          <div className={Style.details_container__header__house_details}>
            <h2>{houseData.item.address}</h2>
            <p>
              {houseData.item.zipcode} {houseData.item.city}
            </p>
            <p>
              {houseData.item.type} | {houseData.item.floor_space}&#x33A1; |
              {houseData.item.num_rooms} vær
            </p>
            <p>Set {houseData.item.num_clicks} gange</p>
          </div>
          <div className={Style.details_container__header__information_board}>
            <div
              className={
                Style.details_container__header__information_board__icon
              }
              onClick={() => {handleModal("photo")}}
            >
              <img src={photo_icon} alt="photos" />
            </div>
            <div
              className={
                Style.details_container__header__information_board__icon
              }
              onClick={() => {handleModal("floorplan")}}
            >
              <img src={floorplan_icon} alt="floorplan" />
            </div>
            <div
              className={
                Style.details_container__header__information_board__icon
              }
              onClick={() => {handleModal("location")}}
            >
              <img src={location_icon} alt="location" />
            </div>
            <div
              className={
                Style.details_container__header__information_board__icon
              }
            >
              <img src={heart_icon} alt="favorites" />
            </div>
          </div>
          <div className={Style.details_container__header__house_economics}>
            <div
              className={Style.details_container__header__house_economics__col}
            >
              <p>Kontantpris</p>
              <h2>{houseData.item.price}</h2>
            </div>
            <p>Udbetaling {houseData.item.payout}</p>
            <p>Ejerudgift per måned {houseData.item.gross}</p>
          </div>
        </header>

        <section className={Style.details_container__house_stats}>
          <div className={Style.details_container__house_stats__box}>
            <div className={Style.details_container__house_stats__box__row}>
              <div>
                <p>Sagnr.</p>
                <p>{houseData.item.id}</p>
              </div>
              <div>
                <p>Boligareal</p>
                <p>{houseData.item.floor_space}&#x33A1;</p>
              </div>
              <div>
                <p>Grundareal</p>
                <p>{houseData.item.ground_space}&#x33A1;</p>
              </div>
              <div>
                <p>Antal rum</p>
                <p>{houseData.item.num_rooms}</p>
              </div>
              <div>
                <p>Antal plan</p>
                <p>{houseData.item.num_floors}</p>
              </div>
            </div>
            <div className={Style.details_container__house_stats__box__row}>
              <div>
                <p>Kælder</p> <p>{houseData.item.basement_space}&#x33A1;</p>
              </div>
              <div>
                <p>Byggeår</p> <p>{houseData.item.year_construction}</p>
              </div>
              <div>
                <p>Ombygget</p> <p>{houseData.item.year_rebuilt}</p>
              </div>
              <div>
                <p>Energimærke</p> <p>{houseData.item.energy_label_name}</p>
              </div>
              <div>
                <p>Liggetid</p>
                <p>FUNTION DER TAGER ANTAL DAGE FRA == CREATED DATA</p>
              </div>
            </div>
            <div className={Style.details_container__house_stats__box__row}>
              <div>
                <p>Kontantpris</p> <p>{houseData.item.price}</p>
              </div>
              <div>
                <p>Udbetaling</p> <p>{houseData.item.payout}</p>
              </div>
              <div>
                <p>Brutto ex. ejerudgift</p> <p>{houseData.item.gross}</p>
              </div>
              <div>
                <p>Netto ex. ejerudgift</p> <p>{houseData.item.net}</p>
              </div>
              <div>
                <p>Ejerudgift</p> <p>{houseData.item.cost} </p>
              </div>
            </div>
          </div>
        </section>
        <section className={Style.details_container__description_section}>
          <article>
            <p>
              · Elegant og herskabelig bolig opført i 1927 · Højloftede stuer
              med originale detaljer · Spisekøkken fra Unoform med
              terrasseudgang · Stor 1. sal med fire værelser og et badeværelse ·
              Evt. mulighed for at drive liberalt erhverv · Eftertragtet
              beliggenhed i Indre Hasseris · Nyanlagt terrasse · Gåafstand til
              by, skoler og butikker
            </p>

            <p>
              e højloftede stuer, den megen plads og det herskabelige udtryk er
              bare noget af det, der gør denne villa på Rafns Alle 8 til noget
              ganske særligt. Den 327 kvadratmeter store bolig suppleres af en
              pragtfuld have med swimmingpool og flere solkroge, og fra den
              eftertragtede adresse i Indre Hasseris har I gåafstand til såvel
              det centrale Aalborg som områdets gode skoler og
              indkøbsmuligheder. Villaen ligger behageligt tilbagetrukket på den
              knap 1.800 kvadratmeter store grund, og allerede ved ankomsten
              træder den aristokratiske elegance tydeligt frem. Bygningen fra
              1927 præsenterer sig med hvidpudset facade, matchende
              sprossevinduer og rødt tegltag, og det behagelige
              førstehåndsindtryk cementeres af den velanlagte forhaves gamle
              træer og figurklippede buske. Der har tidligere været lægeklinik i
              boligen, så der er evt. mulighed for liberalt erhverv, som dog
              skal godkendes af kommunen - og måske denne ejendom igen kunne
              rumme f.eks. en psykologklinik, revisor-kontor eller
              reklamebureau? Inden døre får I tre stuer en suite, der kan lægge
              en fornem ramme om såvel hverdag som fest takket være de originale
              detaljer som sildebensparket, ornamenterede stuklofter og smukke
              indramninger omkring fyldningsdørene.
            </p>
          </article>
          <footer>
            <h2>Kontakt</h2>
            <img
              src={houseData.item.staff.image}
              alt={
                houseData.item.staff.firstname +
                " " +
                houseData.item.staff.lastname
              }
            />
            <p>
              <b>
                {houseData.item.staff.firstname +
                  " " +
                  houseData.item.staff.lastname}
              </b>
            </p>
            <p>{houseData.item.staff.position}</p>
            <p>Mobil: {houseData.item.staff.phone}</p>
            <p>Email: {houseData.item.staff.email}</p>
          </footer>
        </section>
      </main>
      <Modal type={modalType} houseData={houseData} modalToggle={modalToggle} setModalToggle={setModalToggle} />
    </section>
  ) : (
    <p>Siden indlæses...</p>
  );
};
