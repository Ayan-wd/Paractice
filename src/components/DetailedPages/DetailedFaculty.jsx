import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Bgservices from "/src/assets/detailedfaculty/Bgservices.avif";
import Prof1 from "../../assets/detailedfaculty/Prof1.avif";
import Prof2 from "../../assets/detailedfaculty/Prof2.avif";
import Prof3 from "../../assets/detailedfaculty/Prof3.avif";
import Prof4 from "../../assets/detailedfaculty/Prof4.avif";

import "../../css/DetailedFaculty.css";

const DetailedFaculty = () => {
  const navigate = useNavigate();
  const [showModalFlora, setShowModalFlora] = useState(false);
  const [showModalEvander, setShowModalEvander] = useState(false);
  const [showModalTaytum, setShowModalTaytum] = useState(false);
  const [showModalWylder, setShowModalWylder] = useState(false);

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <>
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
          <h1 className="banner-heading">Faculty</h1>
          <div className="breadcrumbs">
            <a style={{ color: "white", textDecoration: "none" }} href="/">
              Home
            </a>{" "}
            <i className="bi bi-chevron-right"></i> <span>Faculty</span>
          </div>
        </div>
      </div>
      <section className="bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-dark text-center">Our Team</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                We are a group of innovative, experienced, and proficient teams.
                You will love to collaborate with us.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0 gx-xxl-5">
            {/* Flora Nyra Card */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card border-0 border-bottom border-success shadow-sm overflow-hidden"
                onClick={() => setShowModalFlora(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={Prof1}
                      alt="Flora Nyra"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Flora Nyra</h4>
                      <p className="text-secondary mb-0">Product Manager</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Evander Mac Card */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card border-0 border-bottom border-success shadow-sm overflow-hidden"
                onClick={() => setShowModalEvander(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={Prof4}
                      alt="Evander Mac"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Evander Mac</h4>
                      <p className="text-secondary mb-0">Art Director</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Taytum Elia Card */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card border-0 border-bottom border-success shadow-sm overflow-hidden"
                onClick={() => setShowModalTaytum(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={Prof2}
                      alt="Taytum Elia"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Taytum Elia</h4>
                      <p className="text-secondary mb-0">Investment Planner</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            {/* Wylder Elio Card */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card border-0 border-bottom border-success shadow-sm overflow-hidden"
                onClick={() => setShowModalWylder(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src={Prof3}
                      alt="Wylder Elio"
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">Wylder Elio</h4>
                      <p className="text-secondary mb-0">Financial Analyst</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flora Nyra Modal */}
      <Modal show={showModalFlora} onHide={() => setShowModalFlora(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Flora Nyra</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img
            src={Prof1}
            alt="Flora Nyra"
            style={{ width: "40%", height: "auto", objectFit: "cover", marginRight: "20px" }}
          />
          <div>
            <h5>Product Manager</h5>
            <p>Flora Nyra has over 10 years of experience in product management, specializing in creating innovative solutions that meet the highest industry standards. Her expertise lies in project coordination, user experience, and team collaboration.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalFlora(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

  
      <Modal show={showModalEvander} onHide={() => setShowModalEvander(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Evander Mac</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img
            src={Prof4}
            alt="Evander Mac"
            style={{ width: "40%", height: "auto", objectFit: "cover", marginRight: "20px" }}
          />
          <div>
            <h5>Art Director</h5>
            <p>Evander Mac is a visionary art director with a keen eye for detail and an exceptional sense of design. He has worked on numerous high-profile projects, bringing a unique blend of creativity and professionalism to each endeavor.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalEvander(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Taytum Elia Modal */}
      <Modal show={showModalTaytum} onHide={() => setShowModalTaytum(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Taytum Elia</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img
            src={Prof2}
            alt="Taytum Elia"
            style={{ width: "40%", height: "auto", objectFit: "cover", marginRight: "20px" }}
          />
          <div>
            <h5>Investment Planner</h5>
            <p>Taytum Elia is an experienced investment planner who specializes in creating personalized financial plans for clients. With a strong background in financial analysis, Taytum ensures that clients achieve their long-term financial goals.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalTaytum(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Wylder Elio Modal */}
      <Modal show={showModalWylder} onHide={() => setShowModalWylder(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Wylder Elio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img
            src={Prof3}
            alt="Wylder Elio"
            style={{ width: "40%", height: "auto", objectFit: "cover", marginRight: "20px" }}
          />
          <div>
            <h5>Financial Analyst</h5>
            <p>Wylder Elio is a dedicated financial analyst with expertise in data-driven insights and market analysis. His analytical skills help organizations make informed financial decisions for sustainable growth.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModalWylder(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailedFaculty;
