import React from "react";
import { Link } from "react-router-dom";
import Style from "./footer.module.scss";
import face_icon from "../../../assets/images/facebook-icon.svg"
import twitter_icon from "../../../assets/images/twitter-icon.svg"

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <h3 className={Style.footer__logo}> HomeLands </h3>

      <ul className={Style.footer__info}>
        <li>Øster Uttrupvej 5</li>
        <li>9000 Aalborg</li>
      </ul>

      <ul className={Style.footer__info}>
        <li><b>Email:</b> <a href="mailto:info@homelands.dk">info@homelands.dk</a></li>
        <li><b>Telefon:</b> <a href="tel:+4511223344">+45 1122 3344</a></li>
      </ul>

      <span className={Style.footer__socials}>
        <Link to="https://twitter.com/"> <img src={twitter_icon} alt="facebook" /></Link>
        <Link to="https://facebook.com/"> <img src={face_icon} alt="facebook" /></Link>
      </span>
    </footer>
  );
};
