import React, { useEffect } from "react";
import "../css/Home.css";
import video1 from "../assets/video1.mp4";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
const navigate= useNavigate();
const handlechange = () => {
  navigate("/contact");
};
const handlechange1 = () => {
  navigate("/about");
};
  return (
    <div className="homepage-container">
      <video
        src={video1}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      />

      <div className="content-overlay">
        <h1 className="heading">Welcome to House Of Mathematics</h1>
        <p className="subtext">We Build The Bridges…</p>
        <div className="button-container">
          <button
            type="button"
            id="about-btn"
            className="btn btn-primary about-button"
            onClick={handlechange1}
          >
            <strong>About Us</strong> <i className="bi bi-arrow-right"></i>
          </button>

          <button
            type="button"
            id="contact-btn"
            className="btn btn-primary contact-button"
            onClick={handlechange}
          >
           <strong> Contact Us</strong> <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
