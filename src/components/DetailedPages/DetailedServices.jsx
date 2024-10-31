import React from "react";
import { useNavigate } from "react-router-dom";
import maths from "/src/assets/DetailedService/maths.jpg";
import "../../css/detailedservices.css";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const DetailedServices = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div style={{ marginTop: "105px" }}>
      {/* Full-width Banner Section */}
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
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="banner-overlay text-center">
            <h1 className="banner-heading">Our Services</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>Our Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="container mt-5">
        <div className="row align-items-center mb-5">
          <div className="col-12">
            <h1 className="text-center text-md-start">
              <strong>Services</strong>
            </h1>
            <p style={{ color: "black", lineHeight: "1.6" }}>
              At House of Mathematics, we are dedicated to fostering a deep
              understanding and love for mathematics. Our expert tutors provide
              personalized coaching for students of all levels—from foundational
              concepts to advanced topics.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row gy-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100" style={{ border: "none" }}>
              <img
                src={maths}
                className="card-img-top img-fluid"
                alt="Mathematics"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">O/A Levels Course</h5>
                <p className="card-text">
                  Detailed video lectures for O/A Levels Students.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#025843" }}
                >
                  Get Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100" style={{ border: "none" }}>
              <img
                src={maths}
                className="card-img-top img-fluid"
                alt="Mathematics"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Advanced Math Course</h5>
                <p className="card-text">
                  Master advanced mathematical concepts with ease.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#025843" }}
                >
                  Get Course
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100" style={{ border: "none" }}>
              <img
                src={maths}
                className="card-img-top img-fluid"
                alt="Mathematics"
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Test Prep Course</h5>
                <p className="card-text">
                  Prepare for tests with our expert-guided practice.
                </p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#025843" }}
                >
                  Get Course
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="container my-4">
          <hr style={{ border: "1px solid black" }} />
        </div>

        {/* Return Button */}
        <div className="text-center mb-5">
          <button
            onClick={handleReturn}
            style={{ backgroundColor: "#025843" }}
            type="button"
            className="btn btn-primary"
          >
            Return Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedServices;
