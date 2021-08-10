import React from "react";
import logo from "../Images/Ezapplogo.png";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-brand">
        <img className="logo" src={logo} alt="" />
        <span className="nav-span">REVIEWS</span>
      </Link>
      <Burger />
    </nav>
  );
}

export default Navbar;
