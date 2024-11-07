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
    <>
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
            <h1 className="banner-heading">Our Services</h1>
            <div className="breadcrumbs">
              <a style={{ color: "white", textDecoration: "none" }} href="/">
                Home
              </a>{" "}
              <i className="bi bi-chevron-right"></i> <span>Services</span>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section */}
      <section className="bg-light py-3 py-md-5 py-xl-8 ">
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="row">
                <div className="col-12 col-xl-11">
                  <h3 className="fs-6 text-secondary mb-3 mb-xl-4 text-uppercase">
                    What We Offer?
                  </h3>
                  <h2 className="display-5 text-dark mb-3 mb-xl-4">
                    Unlock Your Potential with Our Educational Services
                  </h2>
                  <p className="mb-3 mb-xl-4">
                    Our comprehensive range of educational services is designed to help learners of all ages thrive. From personalized tutoring to innovative online courses, we are here to support your learning journey and empower you to achieve your goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 overflow-hidden">
              <div className="row gy-4">
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom border-success shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-5">
                      <i className="bi bi-person-check text-success mb-4" style={{ fontSize: '56px' }}></i>
                      <h4 className="mb-4">Personalized Tutoring</h4>
                      <p className="mb-4 text-secondary">
                        Our experienced tutors offer personalized support to help you understand challenging subjects and improve your grades.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom border-success shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-5">
                      <i className="bi bi-book text-success mb-4" style={{ fontSize: '56px' }}></i>
                      <h4 className="mb-4">Online Courses</h4>
                      <p className="mb-4 text-secondary">
                        We provide a variety of online courses that cater to different learning styles, making education accessible to everyone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom border-success shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-5">
                      <i className="bi bi-calendar-event text-success mb-4" style={{ fontSize: '56px' }}></i>
                      <h4 className="mb-4">Flexible Scheduling</h4>
                      <p className="mb-4 text-secondary">
                        We offer flexible scheduling options to fit your busy lifestyle, allowing you to learn at your own pace and convenience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="card border-0 border-bottom border-success shadow-sm">
                    <div className="card-body text-center p-4 p-xxl-5">
                      <i className="bi bi-headset text-success mb-4" style={{ fontSize: '56px' }}></i>
                      <h4 className="mb-4">24/7 Support</h4>
                      <p className="mb-4 text-secondary">
                        Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have during your learning experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedServices;
