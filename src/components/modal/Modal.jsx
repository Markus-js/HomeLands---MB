import React, {useContext, useEffect} from "react";
import {ModalSlider} from "./modalSlider/ModalSlider";
import { Maps } from "../Maps/Maps";
import {Form} from "../form/Form";
import { LoginForm } from "../loginForm/LoginForm";
import { AppContext } from "../../Context/Context";
import Style from "./modal.module.scss";
import { CreateReview } from "../CreateReview/CreateReview";
import {UpdateReview} from "../../components/UpdataReview/UpdateReview";
import { ClearFix } from "../ClearFix/ClearFix";

export const Modal = ({ type, agent, houseData, modalToggle, setModalToggle }) => {
  const { loginData, reviewsDataById, success, setSuccess } = useContext(AppContext);
  console.log(reviewsDataById)
  function handleExit() {
    // Toggle modal 
    setSuccess(false)
    setModalToggle(false);
  }

  const handleSuccesExit = () => {
    
    setTimeout(() => {
      handleExit()
      setSuccess(false)
    }, 1500);
  }
  
  return (
    <div>
      {modalToggle && type !== "" ? (
        <div>
          <div className={Style.modal_container}> 
          <span className={Style.close} onClick={() => {
              handleExit();
            }}>
          &#10005;
          </span>
          {success ? <h3 className={Style.title} >Kommentar blev sendt</h3> : null}
          {success ?  handleSuccesExit() : null}
          {type === "agent" ? <Form agent={agent} setModalToggle={setModalToggle} /> : null }
            {type === "floorplan" ? <img src={houseData.item.floorplan} alt="floorplan" /> : null }
            {type === "photo" ? <ModalSlider houseData={houseData} /> : null }
            {type === "location" ? <Maps houseData={houseData} /> : null }
            {type === "review_login" && !loginData.user_id ? <LoginForm type={type} /> : null }
            {type === "review_kommentar" && loginData.user_id ? <CreateReview /> : null }
            {Number.isInteger(parseInt(type)) ? <UpdateReview reviewsDataById={reviewsDataById} /> : null }
            
          </div>
          <div
            
            onClick={() => {
              handleExit();
            }}
            className={success ? Style.overlay_success : Style.overlay}
          ></div>
        </div>
      ): null }
    </div>
  );
};




