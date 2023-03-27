import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./../CSS/Header.css";
import logo from "../assets/logog_w_name.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (isSmallScreen) {
    return (
      <div className="header1">
        <div className={`header-logo ${menuOpen ? "hide-logo" : ""}`}>
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="FinTechs" smooth={true} duration={1000} onClick={toggleMenu}>
            FinTechs
          </Link>
          <Link to="Demo" smooth={true} duration={1000} onClick={toggleMenu}>
            Demo
          </Link>
          <Link to="AboutUs" smooth={true} duration={1000} onClick={toggleMenu}>
            About us
          </Link>
          <a href="https://calendly.com/crediclexyz/30min" onClick={toggleMenu}>
            Connect
          </a>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="header1">
        <div className="header-logo">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>
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
          <a href="https://calendly.com/crediclexyz/30min">
            Connect
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
