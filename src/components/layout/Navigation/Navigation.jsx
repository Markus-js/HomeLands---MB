import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../Context/Context";
import { NavLink, useHistory } from "react-router-dom";
import Style from "./navigation.module.scss";
import { Search } from "../../../Helpers/Search";
import { NavigationMobile } from "./NavigationMobile";

export const Navigation = () => {
  const { loginData } = useContext(AppContext);
  const {toggle, setToggle} = useContext(AppContext)
  const history = useHistory();



  
  const navigationData = {
    forside: {
      title: "Forside",
      path: "/frontpage",
    },
    boliger: {
      title: "Boliger til salg",
      path: "/housingsearch",
    },
    login: {
      title: loginData.user_id ? "Admin" : "Login",
      path: "/Login",
    },
  };



  const handlePushFrontpage = () => {
    history.push("/frontpage");
  };

  


  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };



  return (
    <>
      <div
        className={Style.toggle}
        // Change toggle color by boolean
        style={toggle ? { color: "black" } : { color: "white" }}
      >
        <span
          onClick={() => {
            handleToggle();
          }}
        >
            &#10005;
        </span>
      </div>
      {/* Mobile $Breakpoint-sm */}
      {toggle && <NavigationMobile setToggle={setToggle} navigationData={navigationData} />}
      {/* Desktop */}
      {!toggle && (
        <header className={Style.desktop}>
          <div onClick={handlePushFrontpage} className={Style.logo_container}>
            <h1 className={Style.desktop__logo_container__logo}>HomeLands</h1>
          </div>
          <nav className={Style.desktop__nav}>
            <ul className={Style.desktop__nav__ul}>
              <li>
                <NavLink
                  className={Style.link}
                  activeClassName={Style.selected}
                  to={navigationData.forside.path}
                >
                  {navigationData.forside.title}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={Style.link}
                  activeClassName={Style.selected}
                  to={navigationData.boliger.path}
                >
                  {navigationData.boliger.title}
                </NavLink>
              </li>
              <li>
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
      )}
    </>
  );
};
