import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/navlogo/logo.png";
import "../css/Nav.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    navigate("/contact");
  };

  const isActive = (path) => location.pathname === path;

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : "transparent"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" height={90} width={110} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="custom-navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/services") ? "active" : ""}`}
                to="/services"
                onClick={handleNavLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/faculty") ? "active" : ""}`}
                to="/faculty"
                onClick={handleNavLinkClick}
              >
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/detailedAbout") ? "active" : ""}`}
                to="/detailedAbout"
                onClick={handleNavLinkClick}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Signup/Login buttons */}
          <div className="d-flex">
            <Link to="/signupForm" className="btn btn-outline-success mx-2" style={{ minWidth: "100px" }}>
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-success" style={{ minWidth: "100px" }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
