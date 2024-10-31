import React from "react";
import image1 from "../assets/professors/image1.png";
import team1 from "../assets/teams/team1.png";
import team3 from "../assets/teams/team3.png";

const Partners = () => {
  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginTop: "40px", backgroundColor: "black", padding: "40px" }}
      >
        {/* Main Header and Description */}
        <div className="container">
          <div className="row">
            <div className="col-12 text-left mb-4">
              <h1
                style={{ color: "white", fontSize: "36px", fontWeight: "bold" }}
              >
                Team and Partnership
              </h1>
              <p style={{ color: "white", fontSize: "18px", maxWidth: "600px" }}>
                A dedicated team with a large network of mentors across Europe
                and strong partners with online platforms, giving us direct
                access to over a million students.
              </p>
            </div>
          </div>

          {/* Grid Layout for Images and Content */}
          <div
            className="partners-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            {/* Left Column: Image and Text */}
            <div className="d-flex align-items-start">
              <img
                src={image1}
                alt="Azeem Shahid"
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "10%",
                  marginRight: "15px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                }}
              />
              <div className="text-start">
                <h4 style={{ color: "white" }}>Azeem Shahid</h4>
                <p style={{ color: "white", fontWeight: "bold" }}>Administration</p>
                <p style={{ color: "white" }}>
                  “Giving knowledge and experience to the next generation should be a commitment.”
                </p>
              </div>
            </div>

            {/* Right Column: Stacked and Aligned Images */}
            <div className="d-flex flex-column align-items-center gap-4">
              <div className="d-flex w-100 gap-3">
                <img
                  src={team1}
                  alt="Team Member 1"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
                <img
                  src={team3}
                  alt="Team Member 3"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
