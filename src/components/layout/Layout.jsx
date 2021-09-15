import React from "react";
import { NavLink } from "react-router-dom";
// Layout Parent component
export const Layout = (props) => {
  return (
    <div className={props.class}>
      <header>
        <nav>
        
          <ul>
            <NavLink to="/frontpage">Forside</NavLink>
            <NavLink to="/housingsearch">housingsearch</NavLink>
            <NavLink to="/login">Admin</NavLink>
          </ul>
        </nav>
      </header>
      {props.children}
      <p>footer</p>
    </div>
  );
};
