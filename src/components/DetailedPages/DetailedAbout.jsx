import React from 'react';
import '../../css/detailedabout.css';
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";
import MissionImage from "../../assets/detailedabout/MissionImage.avif"; 
import VisionImage from "../../assets/detailedabout/VisionImage.avif"; 
import ValueImage from "../../assets/detailedabout/ValueImage.jpg"; 

const DetailedAbout = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      {/* Banner Section */}
      <div className="container-fluid p-0">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${Bgservices})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            position: "relative",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="banner-overlay text-center p-3">
            <h1 className="banner-heading">About Us</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container my-5">
          
        {/* Our Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src={MissionImage}
              alt="Our Mission"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12 order-lg-2 mb-4 mb-lg-0">
            <img
              src={VisionImage}
              alt="Our Vision"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 col-md-12 order-lg-1">
            <h2>Our Vision</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src={ValueImage}
              alt="Our Values"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <h2>Our Values</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAbout;
