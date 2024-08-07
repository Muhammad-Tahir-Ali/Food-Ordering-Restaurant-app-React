import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink , Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ setShowLogin }) => {
  const [menu, SetMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to={"/"}>
      <img src={assets.logo} alt="" className="logo" />{" "}
      </Link>
      
      <ul className="navbar-menu">
        <li
          onClick={() => SetMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => SetMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => SetMenu("Mobile app")}
          className={menu === "Mobile app" ? "active" : ""}
        >
          Mobile-app
        </li>
        <li
          onClick={() => SetMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img id="search" src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <NavLink to="/Cart">
            <img src={assets.basket_icon} alt="" />
          </NavLink>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
