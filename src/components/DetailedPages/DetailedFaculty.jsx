import React from "react";
import { useNavigate } from "react-router-dom";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";

const DetailedFaculty = () => {
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
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="banner-overlay">
            <h1 className="banner-heading">Our Faculty</h1>
            <div className="breadcrumbs">
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="/"
              >
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>Our Faculty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Information Section */}
      <div className="container">
        {/* Header Section */}
        <div className="row align-items-center my-5">
      
          <div className="col-12 ">
          <h1><strong>Faculty & Staff</strong></h1>
            <p style={{ color: "black", lineHeight: "1.6" }}>
              The communication and media faculty and staff are dedicated to your
              academic and personal success. Our research covers a broad range of
              disciplines and methodologies, and we are involved in interdisciplinary 
              and social justice work throughout the university, the state of Iowa, 
              and beyond. We look forward to connecting with you.
            </p>
          </div>
        </div>

        {/* Faculty Members Section */}
          <h1>Top Rated Faculty</h1>
        <div className="container text-center">
          <div className="row justify-content-center">
            {/* Faculty Member 1 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>

            {/* Faculty Member 2 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Saqib Yasin</h3>
              <p className="professor-role">PhD Mathematics</p>
            </div>

            {/* Faculty Member 3 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Azeem Shahid</h3>
              <p className="professor-role">BS Mathematics</p>
            </div>

            {/* Faculty Member 4 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Azeem Shahid</h3>
              <p className="professor-role">BS Mathematics</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="container my-4">
          <hr style={{ border: "1px solid black" }} />
        </div>

        <h1>Graduates and Other Professionals</h1>
        <div className="container text-center">
          <div className="row justify-content-center">
            {/* Faculty Member 1 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>

            {/* Faculty Member 2 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Saqib Yasin</h3>
              <p className="professor-role">PhD Mathematics</p>
            </div>

            {/* Faculty Member 3 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Azeem Shahid</h3>
              <p className="professor-role">BS Mathematics</p>
            </div>

            {/* Faculty Member 4 */}
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Azeem Shahid</h3>
              <p className="professor-role">BS Mathematics</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img src="https://placehold.co/600x600" alt="Faculty Member" className="professor-img" />
              <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
              <p className="professor-role">MS Computer Science</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="container my-4">
          <hr style={{ border: "1px solid black" }} />
        </div>

        {/* Return Button Section */}
        <div className="text-center">
          <button
            style={{ margin: "20px", backgroundColor: "#025843" }}
            type="button"
            className="btn btn-primary"
            onClick={handleReturn}
          >
            Return Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedFaculty;
