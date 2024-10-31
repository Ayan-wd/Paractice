import React from "react";

import "../css/People.css";
import { useNavigate } from "react-router-dom";

const Faculty = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/faculty");
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <h1 style={{ fontWeight: "bold", marginBottom: "3rem" }}>Faculty</h1>
          <p style={{ fontStyle: "italic", marginBottom: "3rem" }}>
            A good teacher is like a candle — it consumes itself to light the
            way for others
          </p>

          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src="https://placehold.co/600x600"
              alt=""
              className="professor-img"
            />
            <h3 className="professor-name">Ehtihsam Ul Hassan</h3>
            <p className="professor-role">MS Computer Science</p>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="https://placehold.co/600x600"
              alt=""
              className="professor-img"
            />
            <h3 className="professor-name">Saqib Yasin</h3>
            <p className="professor-role">Phd Mathematics</p>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://placehold.co/600x600"
              alt=""
              className="professor-img"
            />
            <h3 className="professor-name">Azeem Shahid</h3>
            <p className="professor-role">BS Mathematics</p>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 mb-4 fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="https://placehold.co/600x600"
              alt=""
              className="professor-img"
            />
            <h3 className="professor-name">Azeem Shahid</h3>
            <p className="professor-role">BS Mathematics</p>
          </div>
        </div>
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
          className="btn btn-primary"
          onClick={handleClick}
        >
          To see The Complete faculty
        </button>
      </div>
      <div className="container my-4">
          <hr style={{ border: "1px solid black" }} />
        </div>
    </div>
  );
};

export default Faculty;
