import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import Style from "./navigation.module.scss";
import { Search } from "../../../Helpers/Search";
import { AppContext } from "../../../Context/Context";

export const NavigationMobile = ({ navigationData }) => {
  const {setToggle} = useContext(AppContext)

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <header className={Style.mobile}>
      <nav className={Style.mobile__nav}>
        <ul className={Style.mobile__nav__ul}>
          <li onClick={handleClose}>
            <NavLink
              className={Style.link}
              activeClassName={Style.selected}
              to={navigationData.forside.path}
            >
              {navigationData.forside.title}
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <NavLink
              className={Style.link}
              activeClassName={Style.selected}
              to={navigationData.boliger.path}
            >
              {navigationData.boliger.title}
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <NavLink
              className={Style.link}
              activeClassName={Style.selected}
              to={navigationData.login.path}
            >
              {navigationData.login.title}
            </NavLink>
          </li>
          <Search />
        </ul>
      </nav>
    </header>
  );
};
