import React, {useState, useEffect} from 'react'
import { doFetch } from '../../helpers/Fetch';
import { useParams } from "react-router-dom";
import Style from "./houseDetails.module.scss";
import photo_icon from "../../assets/images/photo-icon.svg"
import floorplan_icon from "../../assets/images/floorplan-icon.svg"
import location_icon from "../../assets/images/location-icon.svg"
import heart_icon from "../../assets/images/heart-icon.svg"

export const HouseDetails = () => {
    const [houseData, setHouseData] = useState({});

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

    return houseData.item ? (
        <section className={Style.parent_body}>
            <header className={Style.parent_body__header} >
                <img className={Style.parent_body__header__img} src={houseData.item.images[0].filename.large} alt={houseData.item.images[0].description} />
            </header>
            <main className={Style.details_container} >
                <header className={Style.details_container__header} >
                    <div className={Style.details_container__header__house_details} >
                        <h2>{houseData.item.address}</h2>
                        <p>{houseData.item.zipcode} {houseData.item.city}</p>
                        <p>{houseData.item.type} | {houseData.item.floor_space}&#x33A1; | {houseData.item.num_rooms} vær</p>
                        <p>Set {houseData.item.num_clicks} gange</p> 
                    </div>
                    <div className={Style.details_container__header__information_board} >
                        <div className={Style.details_container__header__information_board__icon} ><img src={photo_icon} alt="photos" /></div>
                        <div className={Style.details_container__header__information_board__icon} ><img src={floorplan_icon} alt="floorplan" /></div>
                        <div className={Style.details_container__header__information_board__icon} ><img src={location_icon} alt="location" /></div>
                        <div className={Style.details_container__header__information_board__icon} ><img src={heart_icon} alt="favorites" /></div>
                    </div>
                    <div className={Style.details_container__header__house_economics} >
                        <div className={Style.details_container__header__house_economics__col} >
                            <p>Kontantpris</p>
                            <h2>{houseData.item.price}</h2>
                        </div>
                        <p>Udbetaling {houseData.item.payout}</p>
                        <p>Ejerudgift per måned {houseData.item.gross}</p>
                    </div>
                </header>

                <section>
                    <div></div>
                </section>
            </main>
        </section>
    ) : <p>Siden indlæses...</p>
}
