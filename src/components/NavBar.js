import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import logo from "../img/logo__large_plus.png";

const NavBar = () => {
  return (
    <div className="container navBar">
      <NavLink to={`/`}>
        <img src={logo} alt="logo" />
      </NavLink>
      <Search />
    </div>
  );
};

export default NavBar;
