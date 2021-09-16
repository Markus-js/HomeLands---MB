import React, {useContext} from "react";
import {ModalSlider} from "./modalSlider/ModalSlider";
import { GoogleMaps } from "../googleMaps/GoogleMaps";
import {Form} from "../form/Form";
import { LoginForm } from "../loginForm/LoginForm";
import { AppContext } from "../../Context/Context";

export const Modal = ({ type, agent, houseData, modalToggle, setModalToggle }) => {
  const { loginData, setLoginData } = useContext(AppContext);
  
  function handleExit() {
    // Toggle modal 
    setModalToggle(false);
  }




  return (
    <div>
      {modalToggle && type !== "" ? (
        <div>
          <div className="modalContainer"> 
          {type === "agent" ? <Form agent={agent} setModalToggle={setModalToggle} /> : null }
            {type === "floorplan" ? <img src={houseData.item.floorplan} alt="floorplan" /> : null }
            {type === "photo" ? <ModalSlider houseData={houseData} /> : null }
            {type === "location" ? <GoogleMaps houseData={houseData} /> : null }
            {type === "review_login" && !loginData.user_id ? <LoginForm type={type} /> : null }
            {type === "review_login" && loginData.user_id ? <p>kommentar</p> : null }
            {type === "review_kommentar" && loginData.user_id ? <p>kommentar</p> : null }
          </div>
          <div
            
            onClick={() => {
              handleExit();
            }}
            className="overlay"
          ></div>
        </div>
      ): null }
    </div>
  );
};




