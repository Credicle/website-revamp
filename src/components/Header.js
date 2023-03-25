import React from "react";
import { Link } from "react-scroll";
import "./../CSS/Header.css";
import logo from "../assets/logog_w_name 2.png"; // Update the path according to your logo location

function Header() {
  return (
    <div className="header1">
      <nav className="nav-links">
        <Link to="FinTechs" smooth={true} duration={1000}>
          FinTechs
        </Link>
        <Link to="Demo" smooth={true} duration={1000}>
          Demo
        </Link>
        <Link to="AboutUs" smooth={true} duration={1000}>
          About us
        </Link>
        <a href="https://calendly.com/crediclexyz/30min">Connect</a>
      </nav>
    </div>
  );
}

export default Header;
