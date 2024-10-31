import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/navlogo/logo.png";

import "../css/Nav.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
            height={80}
            width={140}
          />
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
          <ul className="custom-navbar-nav">
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
                className={`nav-link ${isActive("/founder") ? "active" : ""}`}
                to="/founder"
                onClick={handleNavLinkClick}
              >
                Founder
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

          <button
                style={{
                  backgroundColor: "#025843",
                  borderColor: "#025843",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#025843";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#025843";
                  e.currentTarget.style.transform = "scale(1)";
                }}
            type="button"
            id="nav-button"
            className="btn btn-primary appointment-btn"
            onClick={handleClick}
          >
            <strong>Appointment</strong> <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
