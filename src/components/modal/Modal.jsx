import React from "react";
import {ModalSlider} from "./modalSlider/ModalSlider";

export const Modal = ({ type, houseData, modalToggle, setModalToggle }) => {
  function handleExit() {
    // App.js HouseDetails
    // Toggle modal 
    setModalToggle(false);
  }

  return (
    <div>
      {modalToggle && type !== "" ? (
        <div>
          <div className="modalContainer"> {type} 
            {type === "floorplan" ? <img src={houseData.item.floorplan} alt="floorplan" /> : null }
            {type === "photo" ? <ModalSlider houseData={houseData} /> : null }
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
