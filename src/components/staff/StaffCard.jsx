import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Style from "./staff.module.scss";

export const StaffCard = ({data}) => {
    const [hover, setHover] = useState(false);

    const handleHover = (boolean) => {
        setHover(boolean);
        
      };
    return (
        <Link to={`/staffPage/${data.firstname}/${data.id}`} key={data.id}>
              <figure
                onMouseEnter={() => {handleHover(true)}}
                onMouseLeave={() => {handleHover(false)}}
                className={Style.card_container__card}
                style={{ backgroundImage: `url(${data.image})` }}
              >
                <figcaption className={Style.card_container__card__desc}>
                  <h4>
                    {data.firstname} {data.lastname}
                  </h4>
                  <p>{data.position}</p>
                  {hover ? (
                    <p className={Style.hover}>Email: {data.email}</p>
                  ) : null}
                  {hover ? (
                    <p className={Style.hover}>Mobil: {data.phone}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Link>
    )
}
