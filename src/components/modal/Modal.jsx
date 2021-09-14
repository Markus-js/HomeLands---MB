import React from "react";
import {ModalSlider} from "./modalSlider/ModalSlider";
import { GoogleMaps } from "../googleMaps/GoogleMaps";
import {Form} from "../form/Form";

export const Modal = ({ type, agent, houseData, modalToggle, setModalToggle }) => {
  
  function handleExit() {
    // Toggle modal 
    setModalToggle(false);
  }




  return (
    <div>
      {modalToggle && type !== "" ? (
        <div>
          <div className="modalContainer"> {type} 
          {type === "agent" ? <Form agent={agent} setModalToggle={setModalToggle} /> : null }
            {type === "floorplan" ? <img src={houseData.item.floorplan} alt="floorplan" /> : null }
            {type === "photo" ? <ModalSlider houseData={houseData} /> : null }
            {type === "location" ? <GoogleMaps houseData={houseData} /> : null }
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




